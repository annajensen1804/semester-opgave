// Én simpel export: opbygger hero med logo, burger og titel.
export function renderKontaktHeader(el) {
  if (!el) return;
  el.innerHTML = `
    <div class="hero">
      <div class="topbar">
        <img src="assets/img/logo-g.svg" alt="Logo" class="logo">
        <button class="burger" aria-label="Menu">≡</button>
      </div>
      <h1 class="hero-title">Kontakt Gitte</h1>
      <div class="hero-fade"></div>
    </div>
  `;
}
