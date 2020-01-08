const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const { serverRuntimeConfig } = require('./next.config');
const { getIPAdress } = require('./utils');

const dev = process.env.NODE_ENV !== 'production';

const { PORT } = serverRuntimeConfig;

const app = next({ dev })

const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server  = new Koa();
    const router = new Router();

    // 服务端支持next浅层路由，解决路由传参刷新404问题
    router.get('/detail/:articleId', async (ctx, next) => {
      const realPage = {
          pathname: '/detail',
      };
      const { articleId } = ctx.params;
      const query = { articleId }
      handle(ctx.req, ctx.res, {
          pathname: '/detail',
          query
      });

      ctx.respond = false
  })

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });

    server.use(router.routes(), router.allowedMethods())
    server.listen(PORT, (err) => {

        if (err) {
            throw err;
        }

        const serverUrl = `http://localhost:${PORT}`;
        console.log(`
            App is running at:
            - Local: ${serverUrl}
            - Network: http://${getIPAdress()}:${PORT}
        `);
    })
})
