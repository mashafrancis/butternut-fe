// react libraries
// import 'jsdom-global/register';
import * as React from 'react';

// third-party libraries
import { mount } from 'enzyme';
import MaterialIcon, { RippleMaterialIcon } from '../index';


describe('Material Icon component', () => {
  let wrapper;
  const rippledIconComponent = (
    <RippleMaterialIcon hasRipple unbounded icon='menu' />
  );


  it('should add classNames to classes', () => {
    wrapper = mount(<MaterialIcon className='test-class-name' />);
    const icon = wrapper.find('.material-icons');
    expect(wrapper.find('test-class-name').exists).toBeTruthy();
    expect(icon.length).toEqual(1);
  });

  it('should add ripple class if hasRipple is true', () => {
    wrapper = mount(<MaterialIcon hasRipple className='test-class-name' />);
    const icon = wrapper.find('.material-icons');
    expect(icon.exists).toBeTruthy();
    expect(wrapper.find('material-icons--ripple-surface').exists).toBeTruthy();
  });

  it('should have an icon type as child', () => {
    wrapper = mount(<MaterialIcon icon='menu' />);
    expect(wrapper.find('.material-icons').text()).toEqual('menu');
  });

  it('if it hasRipple true, then it should contain RippleMaterialIcon', () => {
    wrapper = mount(<MaterialIcon icon='menu' hasRipple />);
    expect(wrapper.contains(rippledIconComponent)).toBeTruthy();
  });

  it('if hasRipple false, then it should not contain RippleMaterialIcon', () => {
    wrapper = mount(<MaterialIcon icon='menu' />);
    expect(wrapper.contains(rippledIconComponent)).toBeFalsy();
  });
});
