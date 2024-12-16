import React from "react";
import ReactDOM from 'react-dom/client'; // Correctly import ReactDOM with 'client'

const nested = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    [
      React.createElement('h1', {}, 'This is the h1 tag'),
      React.createElement('h5', {}, 'This is the h5 tag')
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(nested);
