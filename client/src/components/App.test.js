import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App testing with Enzyme and Jest', () => {

  it('should render App component', () => {
    shallow(<App />);
  });
});

// testing to see what jest looks like
// describe('Examining the syntax of Jest tests', () => {

//   it('sums numbers', () => {
//     expect(1 + 2).toEqual(3);
//     expect(2 + 2).toEqual(4);
//   });
// });
