import React, { useState } from 'react';
import './App.css';
import { drops_data } from './data/data';
import Header from './components/Header/Header';
import DropsFilter from './components/DropsFilter/DropsFilter';
import Result from './components/DropsFilter/Result.tsx';

function App() {
  // Définit l'état initial des données filtrées en utilisant toutes les données de drops_data
  const [filteredData, setFilteredData] = useState(drops_data);

  // Fonction pour gérer le changement de sélection du filtre
  const handleFilterChange = (filter: string) => {
    // Filtrer les données en fonction de la sélection du filtre
    const filtered = drops_data.filter((shoe) => {
      if (filter === 'all') {
        return true;
      }
      return shoe.resellIndex === filter;
    });

    // Mettre à jour les données filtrées
    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <Header />
      <DropsFilter onFilterChange={handleFilterChange} />
      <Result data={filteredData} />
    </div>
  );
}

export default App;
