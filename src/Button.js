import React from 'react'

// const Button = () => {
//     return(
//         //Code
//        )
// }
// //OR
// const Button = () => (
//     //Code
// )

const Button = ({ title = 'Nothing' }) => (
  <div>
    <button className='button'>{title}</button>
  </div>
)

export default Button
