import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ onIncrease, onDecrease }){
  const [ count, setCount ] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
    onIncrease && onIncrease(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
    onDecrease && onDecrease(count - 1);
  }

  return(
    <div>
      <span style={{fontSize: 40}}>{count}</span>
      <br/>
      <div style={{display: 'flex', gap: '4px'}}>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  )
}

Counter.proptypes = {
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func
}