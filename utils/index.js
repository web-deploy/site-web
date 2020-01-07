const os = require('os')

module.exports = {
    getIPAdress: () => {
        const interfaces = os.networkInterfaces();

        for (let devName in interfaces) {
            const iface = interfaces[devName];
            for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
            }
        }
    },
    convertTime: (millisecond) => {
      const date  = new Date(millisecond);
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      m = m < 10 ? ('0' + m) : m;
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + m + '-' + d;
    }
}
