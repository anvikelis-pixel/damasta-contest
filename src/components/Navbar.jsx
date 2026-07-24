import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <img
          src="/images/damasta-logo.png"
          alt="Α.Ο. Δαμάστας"
        />
      </Link>

      <button
        type="button"
        className={`menu-button ${menuOpen ? "menu-button-open" : ""}`}
        aria-label="Άνοιγμα μενού"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar-menu ${menuOpen ? "navbar-menu-open" : ""}`}>
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
          <span>→</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;