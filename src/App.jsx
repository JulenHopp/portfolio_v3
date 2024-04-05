import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';


function App() {
  return (
    <>
    <Router>
      <div>
        <Header />
        <Routes>
          {/*comentario*/}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
