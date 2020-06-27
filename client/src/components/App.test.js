import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';
import StoreSection from './StoreSection.jsx';

describe('Testing <App/> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('render App component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('render StoreSection components', () => {
    expect(wrapper.find(StoreSection).exists()).toBe(true);
  });
});
