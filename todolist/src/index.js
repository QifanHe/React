import React from 'react';
import ReactDOM from 'react-dom';
// all in js
// import './index.css';
import App from './App';

// pwa: progressive web application
// https协议的服务器上 即便断网，第二次登陆还是能看到。
// registerServiceWorker 帮助缓存到浏览器里。
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
