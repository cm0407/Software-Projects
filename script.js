const grid = document.getElementById("card-grid");

for (const a of artifacts) {
  const card = document.createElement("article");
  card.className = `card ${a.status}`;

  const linkHTML = a.link
    ? `<a href="${a.link}" target="_blank" rel="noopener">View artifact →</a>`
    : `<span class="muted">Link coming soon</span>`;

  card.innerHTML = `
    <p class="badge">Artifact ${a.number} · ${a.status === "done" ? "Complete" : "Idea"}</p>
    <h3>${a.title}</h3>
    <p>${a.body}</p>
    ${linkHTML}
  `;

  grid.appendChild(card);
}
