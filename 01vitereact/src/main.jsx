import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom React !!</h1>
    </div>
  )
}

const anotherElement = (<a href='https://google.com' target='_blank'>Google Here</a>)

const reactElement2 = React.createElement(
  'a',
  {href:'https://google.com', target : '_blank'},
  'Click here for Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
