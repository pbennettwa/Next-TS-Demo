import { store } from '../src/app/store';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../src/features/counter/counterSlice';

describe('Redux counter state suite', () => {
  let state = store.getState().counter.value;

  it('initiates counter with value of 0', async () => {
    expect(state).toBe(0);
  });

  it('increments by 1', async () => {
    store.dispatch(increment());
    state = store.getState().counter.value;
    expect(state).toBe(1);
  });

  it('decrements by 1', async () => {
    store.dispatch(decrement());
    state = store.getState().counter.value;
    expect(state).toBe(0);
  });

  it('increments by 17', async () => {
    store.dispatch(incrementByAmount(17));
    state = store.getState().counter.value;
    expect(state).toBe(17);
  });
});
