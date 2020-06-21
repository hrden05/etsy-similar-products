import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StoreInfo from '../client/src/components/StoreInfo.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing StoreInfo', () => {

  test('should render StoreInfo component', () => {
    const wrapper = shallow(<StoreInfo />);
    expect(wrapper.exists()).toBe(true);
  });

  test('allows us to set props', () => {
    const wrapper = mount(<StoreInfo storeData="data" />);
    expect(wrapper.props().storeData.to.equal('data'));
    wrapper.setProps({ storeData: 'items'});
    expect(wrapper.props().storeData.to.equal('items'));
  });

});