// import react libraries
import * as React from 'react';

// import third-party libraries
import { shallow } from 'enzyme';

// import components
import Spinner from './';

describe('<Spinner />', () => {
  it('should be mounted properly', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.spinner').length).toEqual(1);
  });

  it('should render a small spinner when value small is passed as props', () => {
    const props = {
      size: 'small',
    };
    const wrapper = shallow(<Spinner { ...props } />);

    expect(wrapper.find('div').props().className).toMatch('spinner small');
  });
});
