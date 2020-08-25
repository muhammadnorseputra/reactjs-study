import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
// import "./styles/main.css";
// import App from './App';
// import HelloComponent from './component/HelloComponent';
// import StateFullComponent from './container/StateFullComponent';
// import Youtube from './component/Youtube/Youtube';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';

ReactDOM.render(  
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('react-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
