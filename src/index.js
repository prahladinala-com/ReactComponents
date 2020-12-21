import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// OLD FUNCTION
// function App() {
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Hello World !!</h1>
//       <button className='button'>Hey Button</button>
//     </div>
//   )
// }

// USING ARROW FUNCTIONS ES6 Function
// const App = () => {
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Hello World !!</h1>
//       <button className='button'>Hey Button</button>
//     </div>
//   )
// }
// ADDED TO APP.JS

ReactDOM.render(<App />, document.getElementById('root'))
