import { Link } from "react-router-dom";
import "../styles/Prizes.css";

const prizes = [
  {
    number: "01",
    sponsor: "ΜΕΝΙΑ",
    category: "Κοσμήματα",
    title: "20 κοσμήματα",
    winners: "20 διαφορετικοί τυχεροί",
    icon: "✦",
  },
  {
    number: "02",
    sponsor: "ΔΥΟ ΒΗΤΑ",
    category: "Βιβλιοπωλείο",
    title: "1 βιβλίο",
    winners: "1 τυχερός",
    icon: "▤",
  },
  {
    number: "03",
    sponsor: "ΣΠΥΡΟΓΙΑΝΝΗΣ",
    category: "Παραδοσιακά προϊόντα",
    title: "5 μέλια",
    winners: "5 διαφορετικοί τυχεροί",
    icon: "⬡",
  },
  {
    number: "04",
    sponsor: "ΜΑΝΙΟΡΟΣ ΙΩΑΝΝΗΣ",
    category: "Ηλεκτρονικά",
    title: "1 ηχείο",
    winners: "1 τυχερός",
    icon: "◉",
  },
  {
    number: "05",
    sponsor: "ΕΒΑΠΟΡΕ",
    category: "Προϊόντα γάλακτος",
    title: "2 γάλατα",
    winners: "2 διαφορετικοί τυχεροί",
    icon: "◇",
  },
  {
    number: "06",
    sponsor: "KID ΝΤΡΕΤΟΣ",
    category: "Προϊόντα γάλακτος",
    title: "2 γάλατα",
    winners: "2 διαφορετικοί τυχεροί",
    icon: "◇",
  },
  {
    number: "07",
    sponsor: "ΓΕΩΠΟΝΙΚΗ ΜΥΛΟΠΟΤΑΜΟΥ",
    category: "Γεωπονικά προϊόντα",
    title: "2 δώρα",
    winners: "2 διαφορετικοί τυχεροί",
    icon: "❋",
  },
  {
    number: "08",
    sponsor: "ΑΡΗΣ",
    category: "Τρόφιμα",
    title: "1 τσουβάλι αλεύρι 25 κιλών",
    winners: "1 τυχερός",
    icon: "♢",
  },
  {
    number: "09",
    sponsor: "REBEKKA STORE",
    category: "Δωροεπιταγές",
    title: "3 δωροεπιταγές",
    winners: "2 × 10€ και 1 × 20€",
    icon: "€",
  },
  {
    number: "10",
    sponsor: "WISP",
    category: "Κουρείο",
    title: "2 κουρέματα",
    winners: "2 διαφορετικοί τυχεροί",
    icon: "✂",
  },
];

function Prizes() {
  return (
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
        <p className="prizes-kicker">Μεγάλη Λαχειοφόρος Αγορά</p>

        <h1>Τα Δώρα</h1>

        <p className="prizes-description">
          Πολλά δώρα για πολλούς διαφορετικούς τυχερούς.
        </p>

        <div className="draw-badge">
          Κλήρωση · 2 Αυγούστου 2026
        </div>
      </section>

      <section className="prizes-grid">
        {prizes.map((prize, index) => (
          <article
            className="prize-card"
            key={prize.number}
            style={{ "--delay": `${index * 0.08}s` }}
          >
            <span className="prize-number">{prize.number}</span>

            <div className="prize-icon">{prize.icon}</div>

            <div className="prize-main">
              <p className="prize-category">{prize.category}</p>
              <h2>{prize.title}</h2>

              <div className="sponsor">
                <span>Προσφορά</span>
                <strong>{prize.sponsor}</strong>
              </div>
            </div>

            <div className="winners">
              <span className="winner-dot" />
              <p>{prize.winners}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="prizes-footer-card">
        <img
          src="/images/damasta-logo.png"
          alt=""
          className="footer-logo"
        />

        <div>
          <p>Αθλητικός Όμιλος Δαμάστας</p>
          <h2>Καλή επιτυχία σε όλους!</h2>
          <span>Σας ευχαριστούμε για τη στήριξή σας.</span>
        </div>
      </section>
    </main>
  );
}

export default Prizes;