import React from 'react';
import { shallow } from 'enzyme';
import StoreProductList from './StoreProductList.jsx';
import StoreProductItem from './StoreProductItem.jsx';

describe('Testing <StoreProductList/> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StoreProductList />);
  });

  test('render StoreProductList component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // test('render StoreProductItem component', () => {
  //   expect(wrapper.find(StoreProductItem).exists()).toBe(true);
  // });
});
