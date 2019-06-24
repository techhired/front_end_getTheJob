import React from 'react';
import JobSearch from './JobSearch';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, mount } from 'enzyme';

configureEnzyme({ adapter: new Adapter() });

describe('tests that when the logout button is pushed, the handleLogout method is used',() => {
  test('test that the handleLogout method is called', () => {
    const mockStore = configureStore([]);
    const mountedJobSearch = mount(<JobSearch/>);

    mountedJobSearch.find('#logOut').simulate('click');

    expect(mountedJobSearch.handleLogout).toHaveBeenCalled()
  })
});
