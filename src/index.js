import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'

import { useEffect, useState } from 'react'
function Exx() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `you click ${count} times`
  })
  return (
    <div>
      <p>y click {count}</p>
      <button onClick={() => setCount(count + 1)}>click </button>
    </div>
  )
}

ReactDOM.render(<Exx />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
