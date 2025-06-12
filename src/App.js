import React, { useEffect } from 'react';
import USKOPitchDeck from './USKOPitchDeck';
import { Analytics } from '@vercel/analytics/react';
import { track } from '@vercel/analytics';
import './App.css';

function App() {
  useEffect(() => {
    // Debug: Log when component mounts
    console.log('Vercel Analytics loaded');
    
    // Track a custom event on app load
    track('app_loaded', {
      timestamp: new Date().toISOString()
    });
  }, []);

  return (
    <>
      <USKOPitchDeck />
      <Analytics debug={process.env.NODE_ENV === 'development'} />
    </>
  );
}

export default App;
