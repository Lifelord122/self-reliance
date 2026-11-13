import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Featured_grid from '../Featured_grid/Featured_grid'
import TopicsSign from '../TopicsSign/TopicsSign'
import Categories from '../Categories/Categories'
import { HashRouter, Routes, Route, Link } from 'react-router'

import HomePage from '../../pages/HomePage'
import AboutPage from '../../pages/AboutPage'
import ArticlePage from '../../pages/ArticlePage'
import RecipeFinderPage from '../../pages/RecipeFinderPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
         <div className='web-layout'>
          <Header/>
      

      <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/recipe-finder" element={<RecipeFinderPage/>}/>
          </Routes>
      </main>
      <Footer/>
    </div>






 

    </HashRouter>
  )
}

export default App
