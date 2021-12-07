import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Router from "./router";
import "./style/bootstrap/bootstrap.min.css";
import "./style/bootstrap-icons/bootstrap-icons.css";
import "./style/animate/animate.css"
import MainProvider from './providers/MainProvider';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <Router/>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();