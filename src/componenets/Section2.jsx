import React, { createContext } from 'react'
import ThemeContext, { ThemeDataContext } from '../Context/ThemeContext'

const Section2 = () => {
    const data = createContext(ThemeDataContext)
  return (
    <div>
      <h1>Section2</h1>
      <p>{data}</p>
    </div>
  )
}

export default Section2
