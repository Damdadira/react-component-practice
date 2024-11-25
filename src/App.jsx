import './App.css'
import { useState } from 'react'
import Board from './components/Board';
import Counter from './components/Counter'; //useState

function App() {
  const [ totalCount, setTotalCount ] = useState(0);

  return(
    <div>
      <hr />
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem'}}>
        <code style={{fontSize: '1.7rem', fontWeight: '800', color: 'orange'}}>useState</code>
        <div>
          TotalCount: {totalCount}
          <div style={{display: 'flex', gap: '5rem'}}>
            {/* 자식 컴포넌트끼리는 서로의 상태 변화에 영향을 받지 않음 */}
            <Counter onIncrease={() => {setTotalCount(totalCount + 1)}} onDecrease={() => {setTotalCount(totalCount - 1)}}></Counter>
            <Counter onIncrease={() => {setTotalCount(totalCount + 1)}} onDecrease={() => {setTotalCount(totalCount - 1)}}></Counter>
            <Counter onIncrease={() => {setTotalCount(totalCount + 1)}} onDecrease={() => {setTotalCount(totalCount - 1)}}></Counter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
