import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <Router>
          <div>
            <Header />
            <div className="app-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </div>
          </div>
        </Router>
      </SimpleBar>
    </>
  );
}
export default App
