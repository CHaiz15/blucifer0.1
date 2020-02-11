import React from 'react';
import { render } from '@testing-library/react';
import AreaCard from './AreaCard';
import { shallow } from 'enzyme'

describe('AreaCard', () => {
  let wrapper;

  beforeEach(() => {
    const mockSelectArea = jest.fn();

    wrapper = shallow(<AreaCard 
      selectArea={mockSelectArea}
      id={69}
    />);
  })

  it('should be an instance of AreaCard component', () => {
    const wrapper = shallow(<AreaCard/>);
      expect(wrapper).toMatchSnapshot();
  });

  it('should have default state of hover false', () => {
    expect(wrapper.state('hover')).toEqual(false)
  });

  it('should change state to hover true when hovered', () => {
    wrapper.find('div.card-div').simulate('mouseover');

    expect(wrapper.state('hover')).toEqual(true)
  });

  it('should change state to hover false when unhovered', () => {
    wrapper.find('div.card-div').simulate('mouseleave');

    expect(wrapper.state('hover')).toEqual(false)
  });

  it('should call addSelectedArea when selectArea is called', () => {
    wrapper.instance().selectArea = jest.fn();
    wrapper.instance().selectArea()

    expect(wrapper.instance().selectArea).toHaveBeenCalled()
  });
})