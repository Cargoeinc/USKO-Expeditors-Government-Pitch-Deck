import React from 'react';
import USKOPitchDeck from './USKOPitchDeck';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  return (
    <>
      <USKOPitchDeck />
      <Analytics />
    </>
  );
}

export default App;
