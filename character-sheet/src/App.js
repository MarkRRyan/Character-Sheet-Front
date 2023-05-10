import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;