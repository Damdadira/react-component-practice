import React, { createRef, useEffect } from 'react';

const Input = React.forwardRef((_, ref) => {
  useEffect(() => {
    console.log(ref.current)
  }, [createRef]);

  return(
    <div>
      Input: <input ref={ref} />
    </div>
  )
});

export default Input;