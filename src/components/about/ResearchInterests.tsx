import { stagger } from "../../utils/stagger";

const INTERESTS = [
  "Psycholinguistics",
  "Cognitive neuroscience of language",
  "Prediction & prediction error",
  "Comprehension & production",
] as const;

export function ResearchInterests() {
  return (
    <section aria-labelledby="interests-heading" className="interests">
      <h2
        className="interests__heading rise"
        id="interests-heading"
        style={stagger(5)}
      >
        Research interests
      </h2>
      <ul className="interests__list">
        {INTERESTS.map((label, i) => (
          <li className="rise" key={label} style={stagger(6 + i)}>
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
