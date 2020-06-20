import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import StoreInfo from '../client/src/components/StoreInfo.jsx';

describe('Testing StoreInfo', () => {

  it('should render StoreInfo component', () => {
    shallow(<StoreInfo />);
  });
});