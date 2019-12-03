// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

import HomePage from './index';

describe('Home Page', () => {
  const wrapper = shallow(<HomePage />);

  it('should be rendered properly', () => {
    expect(wrapper.find('h2').exists).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
