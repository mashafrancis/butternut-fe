// react library
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import AuthHeader from './index';

const props = {
  history: { goBack: jest.fn() },
  title: 'Authenticate',
};

describe('AuthHeader component', () => {
  const wrapper = shallow(<AuthHeader { ...props }/>);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(wrapper.find('.authheader').length).toEqual(1);
  });
});
