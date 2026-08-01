import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import prizes from "../data/prizes";
import "../styles/Prizes.css";

function Prizes() {
  return (
    <>
      <Navbar />

      <main className="prizes-page">
        <header className="prizes-header">
          <Link to="/" className="back-link">
            ← Αρχική
          </Link>

          <img
            src="/images/damasta-logo.png"
            alt="Α.Ο. Δαμάστας"
            className="prizes-logo"
          />

          <div className="header-space" />
        </header>

        <section className="prizes-intro">
          <p className="prizes-kicker">
            Μεγάλη Λαχειοφόρος Αγορά
          </p>

          <h1>Τα Δώρα</h1>

          <p className="prizes-description">
            Όλα τα δώρα παρουσιάζονται με την επίσημη σειρά
            της λαχειοφόρου αγοράς.
          </p>

          <div className="draw-badge">
            Κυριακή 2 Αυγούστου 2026
          </div>
        </section>

        <section
          className="prizes-grid"
          aria-label="Λίστα δώρων λαχειοφόρου"
        >
          {prizes.map((prize, index) => (
            <article
              className="prize-card"
              key={prize.id}
              style={{
                "--delay": `${Math.min(index * 0.008, 0.35)}s`,
              }}
            >
              <span
                className="prize-number"
                aria-label={`Δώρο αριθμός ${prize.number}`}
              >
                {String(prize.number).padStart(3, "0")}
              </span>

              <div
                className={`prize-icon ${
                  prize.image ? "prize-icon-image" : ""
                }`}
                aria-hidden={!prize.image}
              >
                {prize.image ? (
                  <img
                    src={prize.image}
                    alt={`Λογότυπο ${prize.sponsor}`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="prize-default-mark">✦</span>
                )}
              </div>

              <div className="prize-main">
                <p className="prize-category">
                  Δώρο {prize.number}
                </p>

                <h2>{prize.title}</h2>

                <div className="sponsor">
                  <span>Προσφορά</span>
                  <strong>{prize.sponsor}</strong>
                </div>
              </div>

              <div className="winners">
                <span className="winner-dot" />
                <p>1 τυχερός</p>
              </div>
            </article>
          ))}
        </section>

        <section className="prizes-footer-card">
          <img
            src="/images/damasta-logo.png"
            alt="Α.Ο. Δαμάστας"
            className="footer-logo"
            loading="lazy"
            decoding="async"
          />

          <div>
            <p>Αθλητικός Όμιλος Δαμάστας</p>
            <h2>Ευχαριστούμε όλους τους χορηγούς</h2>
            <span>που στηρίζουν τον Α.Ο. Δαμάστας.</span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Prizes;