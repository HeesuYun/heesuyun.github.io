/**
 * Stable public PDFs/posters for CV list items (eScholarship proceedings, L3 lab hosting, etc.).
 * Add entries here when you have a URL; the UI only renders [pdf]/[poster] when set.
 */
export const CV_MEDIA = {
  proceedings: {
    laver2025Distributional:
      "https://escholarship.org/content/qt3v49q50n/qt3v49q50n.pdf",
    ovans2024SpatialPrepositions:
      "https://escholarship.org/content/qt8pj92338/qt8pj92338.pdf",
    yun2023L2Similarity:
      "https://escholarship.org/content/qt1z90478b/qt1z90478b.pdf",
  },
  posters: {
    yun2026HspVerbBias:
      "https://bpb-us-e1.wpmucdn.com/sites.northeastern.edu/dist/5/743/files/2026/03/hsp_2026_heesuyun_poster_final.pdf",
    gobena2025NeurobostonChronotype:
      "https://qlab.sites.northeastern.edu/files/2025/12/Elda-T2L-Poster.pdf",
    yun2025CnsSpeechDiscrimination:
      "https://bpb-us-e1.wpmucdn.com/sites.northeastern.edu/dist/5/743/files/2025/04/CNS2025_HeesuYun.pdf",
    yun2023WillChildrenCogsci:
      "https://l3atbc-public.s3.amazonaws.com/pub_pdfs/Yun%20&%20Li%20Poster%202023.pdf",
    yun2023WhyOlderBucld:
      "https://l3atbc-public.s3.amazonaws.com/pub_pdfs/BUCLD_Heesu+Yun+Poster+2023.pdf",
  },
} as const;
