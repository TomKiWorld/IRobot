import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';

describe('ErrorBoundry Component', () => {
  const Child = () => <h1>Test</h1>;
  const wrapper = shallow(<ErrorBoundry><Child /></ErrorBoundry>);

  it('Expect to render ErrorBoundry Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to render Error message', () => {
    const error = new Error('hi!');
    wrapper.find(Child).simulateError(error);
    expect(wrapper.state().hasError).toBe(true);
  });
});
