import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import prizes from "../data/prizes";
import "../styles/Prizes.css";

const individualPrizeTitles = {
  1: "Κόσμημα",
  2: "Χειροποίητη Τσάντα",
  3: "Χειροποίητο Μπεγλέρι",
  4: "Χειροποίητο Κομπολόι",
  5: "Μέλι",
  6: "Ηχείο",
  7: "Δωροεπιταγή",
  8: "Δώρο",
  9: "Κούρεμα",
  10: "Χειροποίητο Τσαντάκι",
  11: "Τσουβάλι Αλεύρι 25 κιλών",
  12: "Βιβλίο",
  13: "Γάλα Εβαπορέ",
  14: "Γάλα",
};

function createIndividualPrizes() {
  return prizes
    .flatMap((prize) => {
      const singularTitle =
        individualPrizeTitles[prize.id] || prize.title;

      return Array.from(
        { length: prize.quantity },
        (_, itemIndex) => ({
          ...prize,

          uniqueId: `${prize.id}-${itemIndex + 1}`,

          individualTitle: `1 ${singularTitle}`,

          individualValue:
            prize.estimatedValue / prize.quantity,
        })
      );
    })
    .sort(
      (firstPrize, secondPrize) =>
        secondPrize.individualValue -
        firstPrize.individualValue
    );
}

function Prizes() {
  const individualPrizes = createIndividualPrizes();

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
            Κάθε δώρο παρουσιάζεται ξεχωριστά για
            κάθε τυχερό της κλήρωσης.
          </p>

          <div className="draw-badge">
            Κλήρωση · 2 Αυγούστου 2026
          </div>
        </section>

        <section className="prizes-grid">
          {individualPrizes.map((prize, index) => (
            <article
              className="prize-card"
              key={prize.uniqueId}
              style={{
                "--delay": `${Math.min(
                  index * 0.025,
                  0.8
                )}s`,
              }}
            >
              <span className="prize-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className={`prize-icon ${
                  prize.image
                    ? "prize-icon-image"
                    : ""
                }`}
              >
                {prize.image ? (
                  <img
                    src={prize.image}
                    alt={`Λογότυπο ${prize.sponsor}`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  prize.icon
                )}
              </div>

              <div className="prize-main">
                <p className="prize-category">
                  {prize.category}
                </p>

                <h2>{prize.individualTitle}</h2>

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