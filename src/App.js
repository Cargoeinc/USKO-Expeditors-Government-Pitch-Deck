import React, { useEffect } from 'react';
import USKOPitchDeck from './USKOPitchDeck';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  useEffect(() => {
    // Debug: Log when component mounts
    console.log('Vercel Analytics loaded');
    
    // Try tracking via global object after delay
    setTimeout(() => {
      if (window.va) {
        console.log('Analytics object:', window.va);
        // Try different tracking methods
        if (typeof window.va === 'function') {
          window.va('track', 'app_loaded');
        } else if (window.va.track) {
          window.va.track('app_loaded');
        }
      }
    }, 1000);
  }, []);

  return (
    <>
      <USKOPitchDeck />
      <Analytics debug={process.env.NODE_ENV === 'development'} />
    </>
  );
}

export default App;
