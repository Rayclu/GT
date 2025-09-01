import React from 'react';
import ReactDOM from 'react-dom';
import publi from './publi';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<publi />, div);
  ReactDOM.unmountComponentAtNode(div);
});