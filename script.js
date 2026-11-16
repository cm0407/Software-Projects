const grid = document.getElementById("card-grid");

for (const a of artifacts) {
  const card = document.createElement("article");
  card.className = `card ${a.status}`;

  const linkHTML = a.link
    ? `<a href="${a.link}" target="_blank" rel="noopener">View artifact →</a>`
    : `<span class="muted">Link coming soon</span>`;

  // Badge label for each status; "in-progress" shows the current week if set
  let label = "Idea";
  if (a.status === "done") label = "Complete";
  if (a.status === "in-progress") label = a.week ? `In progress · Week ${a.week}` : "In progress";

  card.innerHTML = `
    <p class="badge">Artifact ${a.number} · ${label}</p>
    <h3>${a.title}</h3>
    <p>${a.body}</p>
    ${linkHTML}
  `;

  grid.appendChild(card);
}
