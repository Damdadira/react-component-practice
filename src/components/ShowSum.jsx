import { useMemo } from 'react';

function sum(n){
  console.log('Start')
  let result = 0;
  for(let i = 1; i = n; i++){
    result += i;
  }
}

export default function ShowSum({label, n}){
  const result = useMemo(() => sum(n), [n]); //n이 변경되었을때만 연산하도록 useMemo로 지정

  return(
    <span>
      {label}: {result}
    </span>
  )
}