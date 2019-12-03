// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';
import { Grid } from '../index';

describe('Grid component', () => {
  let wrapper;

  it('should add classNames to classes', () => {
    wrapper = shallow(<Grid className='test-class-name'>Children</Grid>, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid').exists).toBeTruthy();
    expect(wrapper.find('test-class-name').exists).toBeTruthy();
  });

  it('should add classNames to align prop', () => {
    wrapper = shallow(<Grid align='right'>Children</Grid>, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid').exists).toBeTruthy();
    expect(wrapper.find('mdc-layout-grid--align-right').exists).toBeTruthy();
  });

  it('should add classNames to fixedColumnWidth prop', () => {
    wrapper = shallow(<Grid fixedColumnWidth>Children</Grid>, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid').exists).toBeTruthy();
    expect(wrapper.find('mdc-layout-grid--fixed-column-width').exists).toBeTruthy();
  });

  it('should keeps custom props', () => {
    wrapper = shallow(
      <Grid disabled={true} label='test-prop'>Children</Grid>, {
        disableLifecycleMethods: true}
    );
    expect(wrapper.props().disabled);
    expect(wrapper.props().label).toEqual('test-prop');
  });
});
