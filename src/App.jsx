import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Works from './components/works'
import Contact from './components/Contact'
import Footer from './components/Footer'  
import Loading from './components/Loading'
import Cont from './components/Cont'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to handle when everything is loaded
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Add event listener for when everything is loaded
      window.addEventListener('load', handleLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
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
          <Cont />
        </>
      )}
    </div>
  )
}

export default App
