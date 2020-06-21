import { shallow } from 'enzyme';
import React from 'react';
import FindInput from './FindInput';

describe('FindInput Component', () => {
  const mockState = { name: '' };
  const onChange= (text) => {
    mockState.name = text;
  }
  const wrapper = shallow(<FindInput onNameChange={onChange}/>);
  it('Expect to render FindInput Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  const searchInput = wrapper.find('[type=\'search\']').at(0);
  searchInput.simulate('change', { target: { value: 'Name'} });
  it('Expect value to change', () => {
    expect(mockState.name).toEqual('Name');
  });
});
