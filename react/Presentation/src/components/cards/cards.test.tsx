import React from 'react';
import ReactDOM from 'react-dom';
import cards from './cards';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<cards />, div);
  ReactDOM.unmountComponentAtNode(div);
});