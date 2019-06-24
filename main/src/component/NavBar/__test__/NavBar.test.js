
import React from 'react';
import NavBar from '../NavBar';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, mount } from 'enzyme';
configureEnzyme({ adapter: new Adapter() });

describe('renders a string', () => {
  test ('renders string', () => {
    const render = mount(<NavBar/>);
    expect(render.find('JOBBERWOCKY')).toBeDefined()
  })
  });

