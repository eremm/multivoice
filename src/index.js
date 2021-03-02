import React from 'react';
import ReactDOM from 'react-dom';

function OrderFormInvoicer() {
  return <div>Hello, world!</div>;
}

const appInjectionPoint = document.createElement("div");

document.body.appendChild(appInjectionPoint);

ReactDOM.render(<OrderFormInvoicer />, appInjectionPoint);
