import { shallow } from 'enzyme';
import React from 'react';
import Robots from './Robots';

describe('Robots Component', () => {
  it('Expect to render Robots Component pending false', () => {
    expect(shallow(<Robots isPending={false}/>)).toMatchSnapshot();
  });

  it('Expect to render Robots Component pending true', () => {
    expect(shallow(<Robots isPending={true}/>)).toMatchSnapshot();
  });
});
