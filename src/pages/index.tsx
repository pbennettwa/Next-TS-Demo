import { NextPage } from 'next';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../features/counter/counterSlice';

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <div className='app'>
      <h1>Hello World!</h1>
      <h2>
        The current number is <span data-testid='value'>{count}</span>
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type='number'
          data-testid='add-amount'
        />
        &nbsp;
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          data-testid='update-amount'
        >
          Increment by amount
        </button>
      </div>
      <div>
        <div>&nbsp;</div>
        <button onClick={() => dispatch(decrement())} data-testid='down'>
          Decrement by 1
        </button>
        &nbsp;
        <button onClick={() => dispatch(increment())} data-testid='up'>
          Increment by 1
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
