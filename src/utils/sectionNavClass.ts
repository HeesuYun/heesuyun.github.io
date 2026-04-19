/** Active class for in-page section links (single-page resume). */
export function sectionNavClass(
  hash: string | false,
  sectionId: "about" | "research" | "cv" | "contact",
) {
  if (hash === false) {
    return undefined;
  }
  const normalized =
    hash === "" || hash === "#" ? "about" : hash.replace(/^#/, "");
  return normalized === sectionId ? "is-active" : undefined;
}
