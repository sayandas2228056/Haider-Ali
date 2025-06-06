import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Works from './components/works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/Loading'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure all resources are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading screen for at least 3 seconds

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero/>
          <About/>
          <Education/>
          <Works/>
          <Contact/>
          <Footer/>
        </>
      )}
    </div>
  )
}

export default App
