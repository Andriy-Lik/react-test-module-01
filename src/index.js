import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// const painting = paintings[2];



// ReactDOM.createRoot(document.getElementById("root")).render(
// <Painting 
// url={painting.url} 
// title={painting.title}
// author={painting.author.tag} 
// profileUrl={painting.author.url}
// price={painting.price}
// />
// );

