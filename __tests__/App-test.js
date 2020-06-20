import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../client/src/components/App.jsx';

describe('Testing App', () => {

  it('should render App component', () => {
    shallow(<App />);
  });
});
