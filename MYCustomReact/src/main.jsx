import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyCompo from './MyCompo.jsx'

const ReactElement = React.createElement(
  'a',
  {href:"https://www.google.com", target:'_blank'},
  'Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    ReactElement
)
