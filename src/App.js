import { React } from 'react'
import './style.css'
import Button from './Button'

// export default App = () => {
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Hello World !!</h1>
//       <button className='button'>Hey Button</button>
//     </div>
//   )
// }
// OR
const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hello World !!</h1>
      <Button title='Play Store' />
      <Button title='App Store' />
      <Button />
      {/* <button className='button'>Play Store</button>
      <button className='button'>App Store</button> */}
    </div>
  )
}

export default App
