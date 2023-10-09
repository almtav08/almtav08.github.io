import './App.css'
import Navbar from './Navbar'
import Landing from './pages/landing'
import Projects from './pages/projects'
import Publications from './pages/publications'
import Contact from './pages/contact'
import { Route, Routes } from 'react-router-dom'

function App() {

  let component = null
  switch (window.location.pathname) {
    case '/':
      component = <Landing />
      break
    case '/projects':
      component = <Projects />
      break
    case '/publications':
      component = <Publications />
      break
    case '/contact':
      component = <Contact />
      break
  }

  return (
    <>
      <Navbar />
      <div className='active-page'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
