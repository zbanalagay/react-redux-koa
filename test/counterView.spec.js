import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { CounterView } from '../src/containers/Counter/counterView';

describe('(Container) Counter', () => {
  it('renders', () => {
    const wrapper = shallow(<CounterView />);
    expect(wrapper.type()).to.eql('div');
  });
});
