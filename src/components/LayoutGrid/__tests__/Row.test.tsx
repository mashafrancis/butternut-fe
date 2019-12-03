// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';
import { Row } from '../index';

describe('Row component', () => {
  let wrapper;

  it('should add classNames to classes', () => {
    wrapper = shallow(<Row className='test-class-name'>Children</Row>, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid').exists).toBeTruthy();
    expect(wrapper.find('test-class-name').exists).toBeTruthy();
  });

  it('should keeps custom props', () => {
    wrapper = shallow(
      <Row disabled={true} label='test-prop'>Children</Row>, {
        disableLifecycleMethods: true}
    );
    expect(wrapper.props().disabled);
    expect(wrapper.props().label).toEqual('test-prop');
  });
});
