import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import prizes from "../data/prizes";
import "../styles/Prizes.css";

function Prizes() {
  const sortedPrizes = [...prizes].sort(
    (firstPrize, secondPrize) =>
      secondPrize.estimatedValue - firstPrize.estimatedValue
  );

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
            Πολλά δώρα για πολλούς διαφορετικούς τυχερούς.
          </p>

          <div className="draw-badge">
            Κλήρωση · 2 Αυγούστου 2026
          </div>
        </section>

        <section className="prizes-grid">
          {sortedPrizes.map((prize, index) => (
            <article
              className="prize-card"
              key={prize.id}
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <span className="prize-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className={`prize-icon ${
                  prize.image ? "prize-icon-image" : ""
                }`}
              >
                {prize.image ? (
                  <img
                    src={prize.image}
                    alt={`Λογότυπο ${prize.sponsor}`}
                    loading="lazy"
                  />
                ) : (
                  prize.icon
                )}
              </div>

              <div className="prize-main">
                <p className="prize-category">
                  {prize.category}
                </p>

                <h2>{prize.title}</h2>

                <div className="sponsor">
                  <span>Προσφορά</span>
                  <strong>{prize.sponsor}</strong>
                </div>
              </div>

              <div className="winners">
                <span className="winner-dot" />

                <p>
                  {prize.winners === 1
                    ? "1 τυχερός"
                    : `${prize.winners} διαφορετικοί τυχεροί`}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="prizes-footer-card">
          <img
            src="/images/damasta-logo.png"
            alt="Α.Ο. Δαμάστας"
            className="footer-logo"
          />

          <div>
            <p>Αθλητικός Όμιλος Δαμάστας</p>

            <h2>
              Ευχαριστούμε όλους τους χορηγούς
            </h2>

            <span>
              που στηρίζουν τον Α.Ο. Δαμάστας.
            </span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Prizes;