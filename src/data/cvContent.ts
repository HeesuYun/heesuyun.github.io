/** Full CV text (from HeesuYun_CV.pdf) for the web appendix; trim/summarize later as needed. */

export type LinkedCitation = {
  citation: string;
  href: string;
  linkLabel: string;
};

export const PEER_REVIEWED: readonly LinkedCitation[] = [
  {
    citation:
      "Gomes, V., Huh, Y., Yun, H., & Trueswell, J. C. (2026). Failure is always an option: Children's production of truth-functional negation and its implications for learning. Cognition, 267, 106342.",
    href: "https://doi.org/10.1016/j.cognition.2025.106342",
    linkLabel: "DOI",
  },
] as const;

export const UNDER_REVIEW: readonly LinkedCitation[] = [
  {
    citation:
      "Weng Y-L., Yun H., Owen Van Horne A., & Qi Z. (under review). The development of the relationship between distributional learning and prediction in language.",
    href: "https://osf.io/preprints/psyarxiv/ycqvn",
    linkLabel: "PsyArXiv preprint",
  },
] as const;

export const EDUCATION_EMPLOYMENT: readonly string[] = [
  "2026–Present — Ph.D. in Psychology, Northeastern University, Boston, MA. PI: Dr. Zhenghan Qi.",
  "2024–2026 — M.S. in Psychology, Northeastern University, Boston, MA.",
  "2023–2024 — Research Specialist/Lab manager, University of Pennsylvania, Philadelphia, PA. PI: Dr. John Trueswell.",
  "2018–2023 — B.S. in Psychology (Cum Laude), Boston College, Chestnut Hill, MA. PI: Dr. Joshua Hartshorne. Honors thesis: The Impact of Linguistic Structures in First Language on Second Language Acquisition: A Study of English Language Learners with 32 Distinct First Languages.",
] as const;

export const AWARDS: readonly string[] = [
  "2023 — Paula Menyuk Travel Award, Boston University Conference on Language Development.",
] as const;

export const CONFERENCE_PROCEEDINGS: readonly string[] = [
  "Laver, A., Yun, H., Kim, A. E, & Trueswell, J. (2025). Distributional learning over meaningful words facilitates semantic inferences about previously unknown words. Proceedings of the Annual Meeting of the Cognitive Science Society, 47. [pdf]",
  'Ovans, Z., Yun, H., Yi, S., Barbara, L., Trueswell, J. (2024). A Look "Inside" Children\'s Real-time Processing of Spatial Prepositions. Proceedings published at the 46th Annual Meeting of the Cognitive Science Society, Rotterdam, the Netherlands. [pdf]',
  "Yun, H., Li, W., Li, Z., & Hartshorne, J. K. (2023). Do Children Learn English More Quickly When Their Native Language Is Similar To English? Proceedings published at the 45th Annual Meeting of the Cognitive Science Society, Sydney, Australia. [pdf]",
] as const;

export const CONFERENCE_TALKS: readonly string[] = [
  "Ovans, Z., Barbara, L., Yun, H., Yi, S., Trueswell, J. (2024). Incremental processing of spatial prepositions supports predictions of object geometries. Talk to be presented at the 49th Boston University Conference on Language Development, Boston, MA.",
  "Gomes, V., Huh, Y., Yun, H., and Trueswell, J. (2024). Failures Succeed in Affirming Negation: Event Perception and negator learning. Talk to be presented at the 49th Boston University Conference on Language Development, Boston, MA.",
  'Ovans, Z., Yun, H., Yi, S., Barbara, L., Trueswell, J. (2024). A Look "Inside" Children\'s Real-time Processing of Spatial Prepositions. Talk presented at the 46th Annual Meeting of the Cognitive Science Society, Rotterdam, the Netherlands.',
  "Yun, H., Li, W., Li, Z., & Hartshorne, J. K. (2023). Why do older children learn second languages faster than younger children?. Talk presented at the Many Paths to Language Conference, Nijmegen, the Netherlands.",
] as const;

export const CONFERENCE_POSTERS: readonly string[] = [
  "Yun, H., Van Horne A.J.O, & Qi, Z. (2026). Prediction and Prediction-Error-Driven Learning in Children: Developmental Patterns in English Verb Bias Acquisition. Poster presented at the 39th Annual Conference on Human Sentence Processing, MIT, Cambridge, MA. [poster]",
  "Gobena, E., Yun, H., Earle, F., Qi, Z. (2025). Impact of Chronotype and Training Synchrony on Non-Native Speech Sound Acquisition. Poster presented at 2025 NeuroBoston Symposium, Medford, MA. [poster]",
  "Yun, H., Montoute, M., Voso, L., Sile, B., Chukrallah, C., Latham, T., Lanka, P., Earle, F., Qi, Z. (2025). Across- but Not With-Category Speech Discrimination Is Associated with Individual Phonological Awareness. Poster presented at the Cognitive Neuroscience Society (CNS) 2025, Boston, MA. [poster]",
  "Laver, A., Yun, H., Kim, A., Trueswell, J. (2024). Distributional history of pseudowords informs word-referent mappings, but only when language has semantic seeds. Poster presented at the 49th Boston University Conference on Language Development, Boston, MA.",
  'Ovans, Z., Barbara, L., Yun, H., Yi, S., Trueswell, J. (2024). How fast are children on the "inside"? Real-time processing of spatial prepositions. Poster presented at 37th Annual Conference on Human Sentence Processing, Ann Arbor, MI.',
  "Vurgun, U,. Yun, H., Barbara, L., Trueswell, J. (2024). Symmetrical Or Not?: A New Method To Probe Real-Time Semantic Categorization. Poster presented at 37th Annual Conference on Human Sentence Processing, Ann Arbor, MI.",
  "Gomes, V., Huh, Y., Yun, H., and Trueswell, J. (2024). Failure teaches success: Linking real-time event processing & production with negation. Poster presented at the 37th Annual Conference on Human Sentence Processing, Ann Arbor, MI.",
  "Yun, H., Li, W., Li, Z., & Hartshorne, J. K. (2023). Will Children Learn English Faster If Their Native Language Is Similar to English?. Poster presented at the 45th Annual Meeting of the Cognitive Science Society, Sydney, Australia. [poster]",
  "Yun, H., Li, W., & Hartshorne, J. K. (2023). Why Do Older Children Learn Second Languages Faster Than Younger Children? (2023). Poster presented at the 48th Boston University Conference on Language Development, Boston, MA. [poster]",
  "Chang, W.I., Kim, S.J., Yoon Y.T., Yun, H., Ha, J. (2020). On the issues of introducing Green Pricing in South Korea. Abstract published at the Korea Energy Society, 83, Republic of Korea. [pdf]",
] as const;

export const INVITED_TALKS: readonly string[] = [
  "Joint-lab presentations — Master's Thesis Proposal: Surprise in With-phrase Interpretation: Trajectories & Choice (1 hour), Fall 2025, Joint Meeting of Language Acquisition and Brain Lab & Music, Imaging, and Neural Dynamics Laboratory.",
  "Other — Typical Language Development (1 hour), Summer 2025, Guest Lecturer in Beyond Words Accelerate Pre-College Programs, Northeastern University.",
] as const;

export const PROFESSIONAL_MEMBERSHIPS: readonly string[] = [
  "Cognitive Science Society; Society for Human Sentence Processing; Society for Language Development; Cognitive Neuroscience Society; Society for the Neurobiology of Language.",
] as const;

export const SOFTWARE_TOOLS: readonly string[] = [
  "R; PennController Ibex; webcam-based eyetracking; Tobii TX300; Tobii Pro Glasses 2; LaTeX; PsychoPy; Praat; Lookit; REDCap; Qualtrics; Prolific; Salesforce data cloud; Siemens MAGNETOM Prisma 3T whole-body human MRI scanner.",
] as const;

export const LANGUAGES: readonly string[] = [
  "Korean (Native); English (Fluent); Chinese (Intermediate); Japanese (Elementary); Tagalog (Elementary).",
] as const;

export const MENTORING: readonly string[] = [
  "2025 — Northeastern University Co-op: Elda Gobena.",
] as const;
