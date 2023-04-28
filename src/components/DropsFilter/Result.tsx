// DropsFilter/Result.tsx
import { DropData } from '../../data/data';
import './Result.css';
import React, { useState, useEffect } from 'react';
// Propriété data de type DropData
interface ResultProps {
  data: DropData[];
}

const Result: React.FC<ResultProps> = ({ data }) => {
  // Composant Result de type React.FC<ResultProps> prenant en entrée un objet contenant une propriété data
  const [playAnimation, setPlayAnimation] = useState(false); // Utilisation du hook d'état pour la variable playAnimation, initialisé à false
  const getResellColor = (resellLevel: string) => {
    // Fonction pour retourner la couleur de la pastille en fonction de la valeur de resellLevel
    if (resellLevel === 'Excellent Resell') return '#5D19FF';
    if (resellLevel === 'Bon Resell') return '#00FFB0';
    if (resellLevel === 'Moyen Resell') return '#FEC005';
    return '#FF0000'; // Mauvais Resell
  };
  useEffect(() => {
    // Utilisation du hook useEffect
    setPlayAnimation(true); // Mettre la variable playAnimation à true
    const timer = setTimeout(() => {
      // Délai pour mettre playAnimation à false
      setPlayAnimation(false);
    }, 500); // Durée de l'animation en ms

    return () => clearTimeout(timer); // Nettoie le timer lorsque le composant est démonté
  }, [data]); // Déclenche l'effet à chaque fois que la propriété data change

  return (
    <div className="shoes-container">
      {data.map((shoe, index) => (
        <div
          key={shoe.id}
          className={`shoe-box${playAnimation ? ' animate' : ''}`}
        >
          <img src={shoe.imagePath} alt={shoe.modelName} />
          <h3 style={{ color: shoe.colorName }}>
            {shoe.modelName.toUpperCase()}
          </h3>
          <h4>
            {shoe.brandName.charAt(0).toUpperCase() + shoe.brandName.slice(1)}
          </h4>
          <p
            style={{
              fontWeight: 600,
              backgroundColor: '#F9F9F9',
              borderRadius: '165.942px',
              padding: '4px 8px',
            }}
            className="resell-value"
          >
            {/* Conteneur de la pastille et de la valeur de l'indice de revente */}
            <div
              className="resell-color-indicator"
              style={{ backgroundColor: getResellColor(shoe.resellIndex) }} // Définition de la couleur de la pastille en fonction de la valeur de resellIndex
            ></div>{' '}
            {/* Pastille de couleur */}
            {shoe.resellIndex} {/* Valeur de l'indice de revente */}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Result;
