import { useState } from 'react';

export default function Pagination({ defaultPage, limit, total, onChange }){
  const [ page, setPage ] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const handleChangePage = (newPage) => {
    onChange(newPage);
    setPage(newPage);
  }

  return(
    <div>
      <button onClick={() => page !== 0 && handleChangePage(page - 1)}>이전</button>
      
    </div>
  )
}