import React from 'react';
import ReactDOM from 'react-dom';

import MultivoiceApp from './App';

const appInjectionPoint = document.createElement("div");

document.body.appendChild(appInjectionPoint);

ReactDOM.render(<MultivoiceApp />, appInjectionPoint);
