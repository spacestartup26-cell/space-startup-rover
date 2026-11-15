// Optional public link overrides. Republish after changing a value.
// Empty values keep the links configured in index.html.
const PROJECT_LINKS = {
  youtube: "",
  scratch: "https://scratch.mit.edu/projects/1440501370",
  report: "https://spacestartup26-cell.github.io/space-startup-rover/assets/mars%20rover%20story.docx.pdf"
};

const labels = {
  youtube: "Watch on YouTube",
  scratch: "Play on Scratch",
  report: "PDF · 4 pages"
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

