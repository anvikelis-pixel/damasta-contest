import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">
        <section className="home-hero">
          <div className="field-background" />
          <div className="field-overlay" />

          <div className="hero-content">
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
              Κυριακή 2 Αυγούστου 2026
            </p>

            <Link to="/dora" className="prizes-link">
              <span>Δείτε τα Δώρα</span>

              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>

        <section
          className="poster-section"
          aria-labelledby="poster-title"
        >
          <div className="poster-heading">
            <p>Α.Ο. Δαμάστας</p>

            <h2 id="poster-title">
              Οι χορηγοί και οι υποστηρικτές μας
            </h2>
          </div>

          <div className="poster-wrapper">
            <img
              src="/images/damasta-poster.png"
              alt="Αφίσα χορηγών και υποστηρικτών του Α.Ο. Δαμάστας"
              className="damasta-poster"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;