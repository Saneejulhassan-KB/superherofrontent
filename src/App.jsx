import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogComplaint from './pages/LogComplaint';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';





function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log-a-complaint" element={<LogComplaint />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </Router>


    </>
  )
}

export default App
