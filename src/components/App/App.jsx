import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Featured_grid from '../Featured_grid/Featured_grid'
import TopicsSign from '../TopicsSign/TopicsSign'
import Categories from '../Categories/Categories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='web-layout'>
      <Header/>
      <main className="page-content">
      <Featured_grid/>
      <TopicsSign/>
      <Categories/>
      </main>
      <Footer/>
    </div>
    
  )
}

export default App
