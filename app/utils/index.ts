type TNullableDate = Date | string | null;

export function getReleaseDate(date: TNullableDate): string {
  if (!date) {
    return "";
  }
  const projectDate = new Date(date);
  const month = projectDate.toLocaleString("default", { month: "short" });
  const year = projectDate.getFullYear();
  return `${month} ${year}`;
}
