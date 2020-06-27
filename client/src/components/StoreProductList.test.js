import React from 'react';
import { shallow } from 'enzyme';
import StoreProductList from './StoreProductList.jsx';

describe('Testing <StoreProductList/> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StoreProductList />);
  });

  test('render StoreProductList component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
