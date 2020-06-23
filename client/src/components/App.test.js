import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';
import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';

describe('Testing <App/> Component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('render App component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('render StoreInfo and StoreProductList components', () => {
    expect(wrapper.find(StoreInfo).exists()).toBe(true);
    expect(wrapper.find(StoreProductList).exists()).toBe(true);
  });
});
