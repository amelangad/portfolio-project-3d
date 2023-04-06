import {Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  return (
    <div className="app">
    <Nav/>
   <Routes>
      <Route path ="/" element = {<Home />}>
        </Route>
        <Route path ="/projects" element = {<Projects />}>
        </Route>
        <Route path ="/contact" element = {<Contact />}>
        </Route>
        </Routes>
    </div>
  )
}

export default App
