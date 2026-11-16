import React, { useEffect } from 'react';
import { initDeckEngine } from './deckEngine';
import { DeckContainer } from './components/DeckContainer';
import './deck.css';

export function App() {
  useEffect(() => {
    const cleanup = initDeckEngine();
    return () => {
      cleanup();
    };
  }, []);

  return <DeckContainer />;
}
