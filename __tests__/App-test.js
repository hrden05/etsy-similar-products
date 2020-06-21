import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';
import StoreInfo from '../client/src/components/StoreInfo.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing App Component', () => {

  test('should render App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('renders StoreInfo', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(StoreInfo)).to.have.lengthOf(1);
  });

  test('should have default props of storeData', () => {
    expect(StoreInfo.defaultProps.storeData).toBeDefined();
  });

  test('passes props to StoreInfo', () => {
    const wrapper = mount(<App />);
    const storeInfoWrapper = wrapper.find(StoreInfo);

    expect(storeInfoWrapper.find('p').toBeDefined());
  });
});
