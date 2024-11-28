import { useRef, useState } from 'react';

export default function AutoCounter() {
  const [ count, setCount ] = useState(0);
  const interValId = useRef(); //useRef를 이용하여 interValId에 값을 넣는다

  const handleStart = () => {
    interValId.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000); //id가 변화하여도 다시 렌더링하지 않는다.
  }

  const handleStop = () => {
    clearInterval(interValId.current);
  }

  return(
    <div style={{display: 'flex', gap: '1rem'}}>
      <div>{count}</div>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  )

}