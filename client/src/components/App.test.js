import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';
import StoreInfo from './StoreInfo.jsx';
import StoreProductList from './StoreProductList.jsx';

configure({ adapter: new Adapter() });

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
