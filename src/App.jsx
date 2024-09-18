import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Error from './pages/Error';

const App = () => {

  return (
    <div id='App' className='app-container'>
        <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route index element={ <Home/> }/>
            <Route path='about' element={ <About/> } />
            <Route path='projects' element={ <Projects/> } />
            <Route path='services' element={ <Services/> } />
            <Route path='contact' element={ <Contact/> } />
            <Route path='*' element={ <Error/> } />
          </Route>
        </Routes>
    </div>
  )
}

export default App
