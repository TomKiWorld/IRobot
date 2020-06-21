import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header Component', () => {
  const mockState = {
    route: 'list',
    search: 'robot',
    name: 'name'
  }
  const changeRoute = (text) => {
    mockState.route = text;
  }
  const changeSearch = (text) => {
    mockState.search = text;
  }
  const changeName = (text) => {
    mockState.name = text;
  }
  const wrapper = 
  shallow(
    <Header 
      onRouteChange={changeRoute} 
      resetSearch={changeSearch} 
      resetName={changeName}
    />);
  const buttonOne = wrapper.find('button').at(0);
  const buttonTwo = wrapper.find('button').at(1);
  
  it('Expect to render Header Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Expect to change route to personal and reset search', () => {
    buttonTwo.simulate('click');
    expect(mockState.route).toBe('personal');
    expect(mockState.search).toBe('');
  });
  it('Expect to change route to list and reset name', () => {
    buttonOne.simulate('click');
    expect(mockState.route).toBe('list');
    expect(mockState.name).toBe('');
  });
});
