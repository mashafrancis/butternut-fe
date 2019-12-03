// react library
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import { Logo } from './index';

describe('Logo component', () => {
  const wrapper = shallow(<Logo />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the component correctly', () => {
    expect(wrapper.find('.logo').length).toEqual(1);
  });
});
