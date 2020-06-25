import React from 'react';
import { shallow } from 'enzyme';
import AdsProductList from './AdsProductList.jsx';

describe('Testing <AdsProductList/> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AdsProductList />);
  });

  test('render AdsProductList component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
