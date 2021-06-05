import React from 'react';
import ReactDOM from 'react-dom';

function shoot() {
  alert("skandar swayah");
}

const myelement = (
  <button onClick={shoot}>user name</button>
);


ReactDOM.render(myelement, document.getElementById('root'));
export default shoot