import "../styles/Highlights.css";

const highlights = [
  {
    icon: "✦",
    title: "200+ Δώρα",
    text: "Από δεκάδες χορηγούς",
  },
  {
    icon: "◆",
    title: "Κάθε λαχνός μετράει",
    text: "Όλοι συμμετέχουν στην κλήρωση",
  },
  {
    icon: "◇",
    title: "Τοπικές επιχειρήσεις",
    text: "Με την υποστήριξη των χορηγών",
  },
];

function Highlights() {
  return (
    <section className="highlights">
      {highlights.map((item, index) => (
        <article
          className="highlight-card"
          key={item.title}
          style={{ "--highlight-delay": `${index * 0.12}s` }}
        >
          <div className="highlight-icon">{item.icon}</div>

          <div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Highlights;