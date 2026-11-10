import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Featured_grid from './Featured_grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header/>
      <Featured_grid/>
      <Footer/>
    </div>
    
  )
}

export default App
