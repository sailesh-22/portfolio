import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import './App.css';
import Timeline from './component/Timeline.jsx';
import About from './component/About.jsx';
import Skills from './component/Skills.jsx';
import Projects from './component/Projects.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="About" element={<About/>} />
        <Route path="My-Skills" element={<Skills/>} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Career-Journey" element={<Timeline />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
