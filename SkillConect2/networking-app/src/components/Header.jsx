import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/assets/images/logo.svg" alt="NetworkPro" />
            <span>NetworkPro</span>
          </Link>
          
          <nav className="main-nav">
            <Link to="/search" className="nav-link">
              <i className="icon-search"></i> Buscar
            </Link>
            <Link to="/profile" className="nav-link">
              <i className="icon-user"></i> Mi Perfil
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;