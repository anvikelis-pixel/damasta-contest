import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className="navbar" aria-label="Κεντρική πλοήγηση">
      <Link
        to="/"
        className="navbar-brand"
        onClick={closeMenu}
        aria-label="Αρχική σελίδα Α.Ο. Δαμάστας"
      >
        <img
          src="/images/damasta-logo.png"
          alt="Α.Ο. Δαμάστας"
        />
      </Link>

      <button
        type="button"
        className={`menu-button ${
          menuOpen ? "menu-button-open" : ""
        }`}
        aria-label={
          menuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"
        }
        aria-expanded={menuOpen}
        aria-controls="navbar-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="navbar-navigation"
        className={`navbar-menu ${
          menuOpen ? "navbar-menu-open" : ""
        }`}
      >
        <Link to="/" onClick={closeMenu}>
          Αρχική
        </Link>

        <Link to="/dora" onClick={closeMenu}>
          Δώρα
        </Link>

        <Link
          to="/dora"
          className="navbar-action"
          onClick={closeMenu}
        >
          Δείτε τα Δώρα
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;