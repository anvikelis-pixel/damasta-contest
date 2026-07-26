import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import prizes from "../data/prizes";
import "../styles/Prizes.css";

const individualPrizeDetails = {
  1: {
    title: "Κόσμημα",
    gender: "neutral",
  },
  2: {
    title: "Χειροποίητη Τσάντα",
    gender: "feminine",
  },
  3: {
    title: "Χειροποίητο Μπεγλέρι",
    gender: "neutral",
  },
  4: {
    title: "Χειροποίητο Κομπολόι",
    gender: "neutral",
  },
  5: {
    title: "Μέλι",
    gender: "neutral",
  },
  6: {
    title: "Ηχείο",
    gender: "neutral",
  },
  7: {
    title: "Δωροεπιταγή",
    gender: "feminine",
  },
  8: {
    title: "Δώρο",
    gender: "neutral",
  },
  9: {
    title: "Κούρεμα",
    gender: "neutral",
  },
  10: {
    title: "Χειροποίητο Τσαντάκι",
    gender: "neutral",
  },
  11: {
    title: "Τσουβάλι Αλεύρι 25 κιλών",
    gender: "neutral",
  },
  12: {
    title: "Βιβλίο",
    gender: "neutral",
  },
  13: {
    title: "Γάλα Εβαπορέ",
    gender: "neutral",
  },
  14: {
    title: "Γάλα",
    gender: "neutral",
  },
};

function getOrdinal(number, gender) {
  if (gender === "feminine") {
    return `${number}η`;
  }

  return `${number}ο`;
}

function createIndividualPrizes() {
  return prizes
    .flatMap((prize) => {
      const details = individualPrizeDetails[prize.id];

      return Array.from(
        { length: prize.quantity },
        (_, itemIndex) => {
          const itemNumber = itemIndex + 1;

          return {
            ...prize,

            uniqueId: `${prize.id}-${itemNumber}`,

            individualTitle: details
              ? `${getOrdinal(
                  itemNumber,
                  details.gender
                )} ${details.title}`
              : `${itemNumber}ο ${prize.title}`,

            individualValue:
              prize.estimatedValue / prize.quantity,
          };
        }
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