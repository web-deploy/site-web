import React from 'react';
import './index.less'

// export default class AppLeft extends React.Component {
//   render (

//   )
// }

const AppLeft = () => {
  return (
    <div className="app-left">
      <div className="user-info">
        <img className="avatar" src="http://site.bj.bcebos.com/9c775842jw8es0f3kmzz1j20k00k0q3r.jpg?authorization=bce-auth-v1%2Fa3192d1c7c6a4b4abb488580fea63d4c%2F2020-01-05T05%3A04%3A06Z%2F300%2Fhost%2F9f13a007b36abcca1e8104545c9c3e0d4a5ab7a52100ff82355412656e792024" />
        <div className="name">鲁西西的博客</div>
        <div className="name-en">Luxixi's Blog</div>
      </div>
    </div>
  )
}

export default AppLeft;
