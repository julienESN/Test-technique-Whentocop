import React from 'react';
import './App.css';
import { drops_data } from './data/data.ts';
import Header from './components/Header/Header.tsx';
import DropsFilter from './components/DropsFilter/DropsFilter';

function App() {
  const handleFilterChange = (filter: string) => {
    console.log(`Filter changed to: ${filter}`);
    // Vous pouvez ajouter ici la logique pour filtrer les données en fonction de la sélection de l'utilisateur.
  };

  return (
    <div className="App">
      <Header />
      <DropsFilter onFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;
