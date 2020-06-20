import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import StoreProductItem from '../client/src/components/StoreProductItem.jsx';

describe('Testing StoreProductItem', () => {

  it('should render StoreProductItem component', () => {
    shallow(<StoreProductItem />);
  });
});