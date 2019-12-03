// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';
import { Cell } from '../index';


describe('Cell component', () => {
  let wrapper;

  it('should add classNames to classes', () => {
    wrapper = shallow(<Cell className='test-class-name' />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid__cell').exists).toBeTruthy();
    expect(wrapper.find('test-class-name').exists).toBeTruthy();
  });

  it('should add correctly className to columns prop', () => {
    wrapper = shallow(<Cell columns={4} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid__cell').exists).toBeTruthy();
    expect(wrapper.find('mdc-layout-grid__cell--span-4').exists).toBeTruthy();
  });

  it('should add correctly className to align prop', () => {
    wrapper = shallow(<Cell align='bottom' />, {
    disableLifecycleMethods: true,
  });
    expect(wrapper.find('mdc-layout-grid__cell').exists).toBeTruthy();
    expect(wrapper.find('mdc-layout-grid__cell--align-bottom').exists).toBeTruthy();
  });

  it('should add correct className to desktopColumns prop', () => {
    wrapper = shallow(<Cell desktopColumns={4} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid__cell').exists).toBeTruthy();
    expect(wrapper.find('mdc-layout-grid__cell--span-4-desktop').exists).toBeTruthy();
  });

  it('should add correct className to order prop', () => {
    wrapper = shallow(<Cell order={12} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid__cell').exists).toBeTruthy();
    expect(wrapper.find('mdc-layout-grid__cell--order-12').exists).toBeTruthy();
  });

  it('should add correct className to phoneColumns prop', () => {
    wrapper = shallow(<Cell phoneColumns={4} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid__cell').exists).toBeTruthy();
    expect(wrapper.find('mdc-layout-grid__cell--span-4-phone').exists).toBeTruthy();
  });

  it('should add correct className to tabletColumns prop', () => {
    wrapper = shallow(<Cell tabletColumns={4} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('mdc-layout-grid__cell').exists).toBeTruthy();
    expect(wrapper.find('mdc-layout-grid__cell--span-4-tablet').exists).toBeTruthy();
  });

  it('should keeps custom props', () => {
    const wrapper = shallow(<Cell disabled={true} label='test-prop' />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.props().disabled);
    expect(wrapper.props().label).toEqual('test-prop');
  });
});
