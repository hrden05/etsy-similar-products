import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import StoreProductList from '../client/src/components/StoreProductList.jsx';

describe('Testing StoreProductList', () => {

  it('should render StoreProductList component', () => {
    shallow(<StoreProductList />);
  });
});