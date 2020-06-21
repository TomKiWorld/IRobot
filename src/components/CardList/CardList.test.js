import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

describe('CardList Component', () => {
  it('Expect to render CardList Component', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'John Snow',
        email: 'john@gmail.com'
      }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
  });
});
