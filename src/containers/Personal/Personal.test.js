import { shallow } from 'enzyme';
import React from 'react';
import Personal from './Personal';

describe('Personal Component', () => {
  it('Expect to render Personal Component', () => {
    expect(shallow(<Personal name={''}/>)).toMatchSnapshot();
  });

  it('Expect to render Personal Component with name', () => {
    expect(shallow(<Personal name={'John'}/>)).toMatchSnapshot();
  });
});
