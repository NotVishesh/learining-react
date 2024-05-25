import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <>
    <h1>
      eheheheheh
    </h1>
    </>
  )
}
const anotherUser ="Keshav pundir"
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target: '_blank'},
  'click me',
  anotherUser // another user get concatinated here
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
