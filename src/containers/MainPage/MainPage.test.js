import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('MainPage Container', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    route: '',
    searchField: '',
    isPending: false
  };
  const wrapper = shallow(<MainPage { ...mockProps}/>);

  it('Expect to render MainPage Component with robots', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Filter robots correctly', () => {
    expect(wrapper.instance().filterRobots([])).toEqual([]);
  });

  it('Filter robots correctly based on search field return robot', () => {
    const robots = [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }];
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: robots,
      route: 'list',
      searchField: 'J',
      isPending: false
    };
    const wrapper = shallow(<MainPage { ...mockProps }/>);
    expect(wrapper.instance().filterRobots(mockProps.robots)).toEqual(robots);
  });

  it('Filter robots correctly based on search field return empty', () => {
    const robots = [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }];
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: robots,
      route: 'list',
      searchField: 'a',
      isPending: false
    };
    const wrapper = shallow(<MainPage { ...mockProps }/>);
    expect(wrapper.instance().filterRobots(mockProps.robots)).toEqual([]);
  });

  it('Expect to render MainPage Component with personal', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      route: 'personal',
      name: '',
      searchField: '',
      isPending: false
    };
    const wrapper = shallow(<MainPage { ...mockProps }/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to render MainPage Component with personal and name', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      route: 'personal',
      name: 'tom',
      searchField: '',
      isPending: false
    };
    const wrapper = shallow(<MainPage { ...mockProps }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
