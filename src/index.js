import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "react-perfect-scrollbar/dist/css/styles.css";
import './components/atoms/FontAwesome';
import 'toasted-notes/src/styles.css';
import 'tippy.js/dist/tippy.css'; // optional
import { Loader_intro as Loading } from './components/atoms/Loader'

const Layout = React.lazy(() => import('./containers/template/Layout'));
ReactDOM.render(  
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Layout />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('react-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
