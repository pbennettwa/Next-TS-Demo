import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../features/counter/counterSlice';

const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <div className='app'>
      <h1>Hello World!</h1>
      <h2>The current number is {count}</h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type='number'
          className='input'
        />
        &nbsp;
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <div>&nbsp;</div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        &nbsp;
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </div>
  );
};

export default IndexPage;
