import React from 'react';
import ReactDOM from 'react-dom/client';
import Global_styles from './Styles/global_styles';
import Routes from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Routes />
  <Global_styles/>
  </>

);


