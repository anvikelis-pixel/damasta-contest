import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">
        <div className="field-background" />
        <div className="field-overlay" />

        <section className="hero-content">
          <img
            src="/images/damasta-logo.png"
            alt="Αθλητικός Όμιλος Δαμάστας"
            className="damasta-logo"
          />

          <p className="club-name">
            Αθλητικός Όμιλος Δαμάστας
          </p>

          <h1>ΔΑΜΑΣΤΑ</h1>

          <p className="raffle-title">
            Μεγάλη Λαχειοφόρος Αγορά
          </p>

          <p className="raffle-date">
            Κλήρωση: 2 Αυγούστου 2026
          </p>

          <Countdown />

          <Link to="/dora" className="prizes-link">
            <span>Δείτε τα Δώρα</span>
            <span className="arrow">→</span>
          </Link>
        </section>
      </main>
    </>
  );
}

export default Home;