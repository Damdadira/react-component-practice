import { useState } from 'react'
import './App.css'
import Board from './components/Board';

function App() {
  const [visible, setVisible] = useState(false);

  const articles = [
    { id: 1, title: '안녕', author: '홍길동' },
    { id: 2, title: '그래 안녕', author: '강감찬' },
    { id: 3, title: '너도 안녕', author: '이순신' },
  ]

  return(
    <div className='App'>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {/* {visible && (<h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있습니다.</h1>)} */}
      {visible ? <Board articles = {articles}></Board> : <p>게시판을 보려면 버튼을 클릭하세요.</p>}
    </div>
  )
}

export default App
