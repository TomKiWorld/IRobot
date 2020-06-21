import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

describe('Scroll Component', () => {
  it('Expect to render Scroll Component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
  });
});
