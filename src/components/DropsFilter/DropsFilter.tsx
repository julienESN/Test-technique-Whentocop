import React from 'react';
import Select from 'react-select';
import './DropsFilter.css';

// Définir les propriétés du composant DropsFilter
interface DropsFilterProps {
  onFilterChange: (filter: string) => void;
}

// Styles personnalisés pour les options du composant react-select
const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    paddingLeft: 20,
  }),
  control: (provided: any) => ({
    ...provided,
    borderColor: '#000000', // Ajoutez cette ligne
  }),
};
// Composant DropsFilter
const DropsFilter: React.FC<DropsFilterProps> = ({ onFilterChange }) => {
  // Définir les options pour le sélecteur
  const options = [
    { value: 'all', label: 'Tous les resell' },
    { value: 'Excellent Resell', label: 'Excellent resell', color: '#5D19FF' },
    { value: 'Bon Resell', label: 'Bon resell', color: '#00FFB0' },
    { value: 'average', label: 'Moyen resell', color: '#FEC005' },
    { value: 'Mauvais Resell', label: 'Mauvais resell', color: '#FF0000' },
  ];

  // Fonction pour formater les étiquettes des options du sélecteur
  const formatOptionLabel = ({ value, label, color }: any) => (
    <div>
      <span
        className="color-indicator"
        style={{ backgroundColor: color }}
      ></span>
      {label}
    </div>
  );

  // Fonction pour gérer le changement de sélection du filtre
  const handleFilterChange = (selectedOption: any) => {
    onFilterChange(selectedOption.value);
  };

  return (
    <div className="drops-filter">
      <h2 className="no-select">Drops</h2>
      <Select
        options={options}
        formatOptionLabel={formatOptionLabel}
        onChange={handleFilterChange}
        styles={customStyles}
        defaultValue={options[0]}
        className="react-select no-select"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default DropsFilter;
