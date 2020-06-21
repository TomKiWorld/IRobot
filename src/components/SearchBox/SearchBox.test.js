import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

describe('SearchBox Component', () => {
  const mockState = {
    search: ''
  }
  const changeSearch = (text) => {
    mockState.search = text;
  }
  const wrapper = shallow(<SearchBox searchChange={changeSearch}/>);
  it('Expect to render SearchBox Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  const searchInput = wrapper.find('[type=\'search\']').at(0);
  searchInput.simulate('change', { target: { value: 'Robot'} })
  it('Expect value to change', () => {
    expect(mockState.search).toEqual('Robot');
  });
});
