jest.unmock('../src/containers/Counter/counterView');
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { CounterView } from '../src/containers/Counter/counterView';

describe('CounterView', () => {
  function renderCounterView() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CounterView />);
    return renderer.getRenderOutput();
  }
  it('exists', () => {
    expect(TestUtils.isElement(<CounterView />)).toBe(true);
  });

  it('should render 4 elements', () => {
    const output = renderCounterView();
    expect(output.props.children.length).toBe(4);
  });
});


