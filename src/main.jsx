import React from 'react';  /*React: libreria principal*/
import ReactDOM from 'react-dom/client';  /*ReactDOM: dibuja React en el navegador*/
import App from './App.jsx'; /*Importamos el compopnente raiz(nuestra agenda ADSO)*/
import './index.css'; /*Importamos los estilos globales*/ 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);