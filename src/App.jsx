import { useState } from 'react'
import './App.css'
import Board from './components/Board';
import Counter from './components/Counter';

function App() {
  const [ totalCount, setTotalCount ] = useState(0);

  return(
    <div>
      TotalCount: {totalCount}
      {/* 자식 컴포넌트끼리는 서로의 상태 변화에 영향을 받지 않음 */}
      <Counter onIncrease={() => {setTotalCount(totalCount + 1)}} onDecrease={() => {setTotalCount(totalCount - 1)}}></Counter>
      <Counter onIncrease={() => {setTotalCount(totalCount + 1)}} onDecrease={() => {setTotalCount(totalCount - 1)}}></Counter>
      <Counter onIncrease={() => {setTotalCount(totalCount + 1)}} onDecrease={() => {setTotalCount(totalCount - 1)}}></Counter>
    </div>
  )
}

export default App
