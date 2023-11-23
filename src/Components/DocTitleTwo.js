import React, { useState } from 'react'
import useDocumentTitle from '../Hook/useDocumentTitle'

function DocTitleTwo() {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Count One - {count}</button>
    </div>
  )
}

export default DocTitleTwo