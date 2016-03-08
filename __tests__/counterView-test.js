jest.unmock('../src/containers/Counter/counterView');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { CounterView } from '../src/containers/Counter/counterView';

describe('CounterView', () => {
  it('exists', () => {
    const counterView = TestUtils.isElement(<CounterView />);
    expect(counterView).toBe(true);
  });
  it('should render 3 html elements', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CounterView />);
    const output = renderer.getRenderOutput();
    console.log(output);
    expect(output.props.children.length).toBe(4);
  });
});


