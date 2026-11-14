// Add your three public links here, between the quotation marks, then republish.
// Leave a value empty to keep its card marked "Coming soon".
const PROJECT_LINKS = {
  youtube: "",
  scratch: "https://scratch.mit.edu/projects/1440061612",
  report: ""
};

const labels = {
  youtube: "Watch on YouTube",
  scratch: "Play on Scratch",
  report: "Read the project report"
};

Object.entries(PROJECT_LINKS).forEach(([key, value]) => {
  const link = document.getElementById(`${key}-link`);
  if (!link || !value.trim()) return;
  let url;
  try { url = new URL(value); } catch { return; }
  if (url.protocol !== "https:" && url.protocol !== "http:") return;
  link.href = url.href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.removeAttribute("aria-disabled");
  link.removeAttribute("tabindex");
  link.classList.replace("pending", "available");
  document.getElementById(`${key}-status`).textContent = labels[key];
});
