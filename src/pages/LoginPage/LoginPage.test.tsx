// react library
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import LoginPage from './index';

describe('Registration Page', () => {
  const wrapper = shallow(<LoginPage />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the correctly', () => {
    expect(wrapper.find('.authenticate').length).toEqual(1);
  });
});
