import './App.css'
import { useState, useEffect, useRef } from 'react'
import Board from './components/Board';
import Counter from './components/Counter'; //useState
import Input from './components/Input'; //useRef

function App() {
  /**
   * useState
   * 값이 변경될때 다시 렌더링
   */
  const [ totalCount, setTotalCount ] = useState(0);

  /**
   * useEffect
   * 무언가 변화가 있을 때 감지하여 반응하는 훅
   */
  const [ count, setCount ] = useState(0);
  useEffect(() => { console.log(`${count}번 눌림.`) }, [count]);
  useEffect(() => {
    console.log('컴포넌트 실행')
    const handleScroll = () => { console.log(window.scrollY) };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * useRef
   * Dom에 직접 접근할때 사용 or 지역 변수로 사용할때
   * 값이 변경되더라도 다시 렌더링 하지 않음
   */
  const inputRef = useRef();

  return(
    <div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem'}}>
        <code style={{fontSize: '1.7rem', fontWeight: '800', color: 'orange'}}>useRef</code>
        <div style={{display: 'flex', gap: '1rem'}}>
          <Input ref={inputRef}></Input>
          <button onClick={() => inputRef.current.focus()}>Focus</button>
        </div>
      </div>
      <hr />

      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem'}}>
        <code style={{fontSize: '1.7rem', fontWeight: '800', color: 'orange'}}>useEffect</code>
        <div>
          <div>{count}번 누르셨습니다.</div>
          <button onClick={() => setCount(count + 1)}>+</button>

          {/* <div style={{height: 10000}}></div> */}
        </div>
      </div>
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
