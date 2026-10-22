/** Publications shown on /publications (from HeesuYun_CV.pdf). Use *single asterisks* for italics; see `richText`. */

import { LINKS } from "../constants/links";

export type Publication = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  href: string;
  /** Button text; says what the link does. */
  linkLabel: string;
};

export type PublicationGroup = {
  id: string;
  heading: string;
  items: readonly Publication[];
};

/** Rendered bold in author lists. */
export const SELF_AUTHOR_NAMES = ["Yun, H.", "Yun H."] as const;

export const PUBLICATION_GROUPS: readonly PublicationGroup[] = [
  {
    id: "peer-reviewed",
    heading: "Peer-reviewed articles",
    items: [
      {
        authors: "Gomes, V., Huh, Y., Yun, H., & Trueswell, J. C.",
        year: "2026",
        title:
          "Failure is always an option: Children's production of truth-functional negation and its implications for learning",
        venue: "*Cognition*, 267, 106342.",
        href: LINKS.cognition2026,
        linkLabel: "Read in Cognition",
      },
    ],
  },
  {
    id: "under-review",
    heading: "Under review",
    items: [
      {
        authors: "Weng Y-L., Yun H., Owen Van Horne A., & Qi Z.",
        year: "under review",
        title:
          "The development of the relationship between distributional learning and prediction in language",
        venue: "Preprint on PsyArXiv.",
        href: LINKS.psyarxivUnderReview,
        linkLabel: "Read the preprint",
      },
    ],
  },
  {
    id: "proceedings",
    heading: "Conference proceedings",
    items: [
      {
        authors: "Laver, A., Yun, H., Kim, A. E, & Trueswell, J.",
        year: "2025",
        title:
          "Distributional learning over meaningful words facilitates semantic inferences about previously unknown words",
        venue:
          "*Proceedings of the Annual Meeting of the Cognitive Science Society*, 47.",
        href: "https://escholarship.org/content/qt3v49q50n/qt3v49q50n.pdf",
        linkLabel: "Read the paper (PDF)",
      },
      {
        authors: "Ovans, Z., Yun, H., Yi, S., Barbara, L., Trueswell, J.",
        year: "2024",
        title:
          "A Look “Inside” Children's Real-time Processing of Spatial Prepositions",
        venue:
          "*Proceedings published at the 46th Annual Meeting of the Cognitive Science Society*, Rotterdam, the Netherlands.",
        href: "https://escholarship.org/content/qt8pj92338/qt8pj92338.pdf",
        linkLabel: "Read the paper (PDF)",
      },
      {
        authors: "Yun, H., Li, W., Li, Z., & Hartshorne, J. K.",
        year: "2023",
        title:
          "Do Children Learn English More Quickly When Their Native Language Is Similar To English?",
        venue:
          "*Proceedings published at the 45th Annual Meeting of the Cognitive Science Society*, Sydney, Australia.",
        href: "https://escholarship.org/content/qt1z90478b/qt1z90478b.pdf",
        linkLabel: "Read the paper (PDF)",
      },
    ],
  },
] as const;
