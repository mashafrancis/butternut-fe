// react library
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import PageNotFound from './index';

const props = {
  history: { goBack: jest.fn() },
};

describe('PageNotFound components', () => {
  const wrapper = shallow(<PageNotFound { ...props }/>);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Page Not Found components', () => {
    expect(wrapper.find('.notfound').length).toEqual(1);
  });
});
