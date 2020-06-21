import { shallow } from 'enzyme';
import React from 'react';
import PersonalImage from './PersonalImage';

describe('PersonalImage Component', () => {
  it('Expect to render PersonalImage Component', () => {
    expect(shallow(<PersonalImage />)).toMatchSnapshot();
  });
});
