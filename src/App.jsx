import './App.css'
import Navbar from './Navbar'
import Landing from './pages/landing'
import Projects from './pages/projects'
import Publications from './pages/publications'
import Contact from './pages/contact'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about'

function App() {
  return (
    <>
      <Navbar />
      <div className='active-page'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
