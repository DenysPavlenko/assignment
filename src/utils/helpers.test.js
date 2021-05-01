/* eslint-disable no-undef */
import { handleAccessibilityKeyPress } from './helpers';

describe('handleAccessibilityKeyPress', () => {
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
  });
  test('calls handler if key equals to Enter', () => {
    handleAccessibilityKeyPress({ preventDefault: () => { }, key: 'Enter' }, mockFunc);
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
  test('calls handler if key equals to Spacebar', () => {
    handleAccessibilityKeyPress({ preventDefault: () => { }, key: 'Spacebar' }, mockFunc);
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
  test('calls handler if e.which equals to 13', () => {
    handleAccessibilityKeyPress({ preventDefault: () => { }, which: 13 }, mockFunc);
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
  test('calls handler if e.which equals to 32', () => {
    handleAccessibilityKeyPress({ preventDefault: () => { }, which: 32 }, mockFunc);
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});
