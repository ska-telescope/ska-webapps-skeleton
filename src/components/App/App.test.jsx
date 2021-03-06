import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import logo from '../../resources/logo.svg';

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('displays text correctly', () => {
    const wrapper = shallow(<App />);
    const text = (
      <p>
        Edit&nbsp;
        <code>src/App.js</code>
        &nbsp;and save to reload.
      </p>
    );
    expect(wrapper).toContainReact(text);
  });

  it('displays the image correctly', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('img').prop('src')).toEqual(logo);
  });
});
