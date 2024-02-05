import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header-flex">
        <div className="logo">Nazwa firmy</div>
        <nav className="nav">
          <ul className="menu">
            <li className="menu-item">
              <a href="#aboutus">O nas</a>
            </li>
            <li className="menu-item">
              <a href="#offer">Oferta</a>
            </li>
            <li className="menu-item">
              <a className="contact" href="#kontakt">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
