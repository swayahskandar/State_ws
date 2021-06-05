import React from 'react';
import ReactDOM from 'react-dom';

function shoot() {
  alert("skandar swayah");
}

const myelement = (
  <button onClick={shoot}>Skandar Swayah!</button>
);


ReactDOM.render(myelement, document.getElementById('root'));
export default myelement