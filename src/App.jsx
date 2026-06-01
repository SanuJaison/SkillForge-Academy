import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  

  return (
    <>
    <ScrollToTop/>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

      <Route path="/*" element={<NotFound/>} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App
