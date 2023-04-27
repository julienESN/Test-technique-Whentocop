import React from 'react';
import './Header.css';

// Composant Header pour afficher l'en-tête du site
const Header: React.FC = () => {
  // Fonction pour gérer le clic sur les liens du menu et empêcher l'effet de saisie de texte
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  // Retourne le JSX pour le composant Header
  return (
    <header className="App-header">
      {/* Logo du site, redirige vers la page d'accueil */}
      <a href="/">
        <img src={`${process.env.PUBLIC_URL}/images/logo-wtc.png`} alt="logo" />
      </a>
      {/* Bouton burger pour le menu mobile */}
      <img
        className="burger-button"
        src={`${process.env.PUBLIC_URL}/images/Burger-button.png`}
        alt="Burger button"
        style={{ height: '100%' }}
      />
      {/* Navigation du site */}
      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            listStyleType: 'none',
            paddingRight: '10px',
          }}
        >
          {/* Liste des liens du menu */}
          {/* Lien Accueil */}
          <li style={{ marginLeft: '50px' }} className="mobile-hidden">
            <a className="custom-link " href="#accueil" onClick={handleClick}>
              Accueil
            </a>
          </li>
          {/* Lien Drops */}
          <li style={{ marginLeft: '50px' }} className="mobile-hidden">
            <a className="custom-link" href="#drops" onClick={handleClick}>
              Drops
            </a>
          </li>
          {/* Lien News */}
          <li style={{ marginLeft: '50px' }} className="mobile-hidden">
            <a className="custom-link" href="#news" onClick={handleClick}>
              News
            </a>
          </li>
          {/* Lien pour télécharger l'application */}
          <li
            style={{ marginLeft: '50px', marginRight: '50px' }}
            className="mobile-hidden"
          >
            <a
              className={`download-link`}
              href="https://apps.apple.com/fr/app/whentocop/id1542957217"
            >
              Télécharge l'application
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
