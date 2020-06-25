import React from 'react';
import { shallow } from 'enzyme';
import SimilarProductList from './SimilarProductList.jsx';

describe('Testing <SimilarProductList/> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SimilarProductList />);
  });

  test('render SimilarProductList component without throwing an error', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
