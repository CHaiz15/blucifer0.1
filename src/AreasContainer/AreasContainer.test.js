import React from 'react';
import { render } from '@testing-library/react';
import AreasContainer from './AreasContainer';
import { shallow } from 'enzyme'

describe('AreasContainer', () => {
  it('should be an instance of AreaContainer component', () => {
    const wrapper = shallow(
        <AreasContainer
            addSelectedArea={jest.fn()}
            areas={[]}
        />);
      expect(wrapper).toMatchSnapshot();
  });
})