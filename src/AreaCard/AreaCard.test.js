import React from 'react';
import { render } from '@testing-library/react';
import AreaCard from './AreaCard';
import { shallow } from 'enzyme'

describe('AreaCard', () => {
  it('should be an instance of AreaCard component', () => {
    const wrapper = shallow(<AreaCard/>);
      expect(wrapper).toMatchSnapshot();
  });
})