import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

describe('Card Component', () => {
  it('Expect to render Card Component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
