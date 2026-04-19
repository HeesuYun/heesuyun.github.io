const THEMES = [
  "Psycholinguistics",
  "Cognitive neuroscience of language",
  "Prediction & prediction error",
  "Comprehension & production",
] as const;

export function ResearchThemes() {
  return (
    <section
      aria-labelledby="research-heading"
      className="section anchor-section research-themes"
      id="research"
    >
      <h2 className="section-heading" id="research-heading">
        Research interests
      </h2>
      <ul className="research-chip-list">
        {THEMES.map((label) => (
          <li key={label}>
            <span className="research-chip">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
