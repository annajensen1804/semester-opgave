const heroTmpl = (hero) => {
  const bg = hero?.image || "";
  const title = hero?.title || "Aktiviteter";
  return `
    <div class="header hero" id="top">
      <img src="${bg}" alt="heroImage" class="hero-image" />
      <div class="overlay"></div>
      <div class="frontText">
        <img src="assets/images/logo/logo.png" alt="logo" class="logo" />
        <div class="name">
          <h1 class="h1-small">Gittes</h1>
          <h1 class="h1-big">${title}</h1>
        </div>
        <button class="btnFrontpage">BOOK NU</button>
      </div>
    </div>
  `;
};

export const aktiviteterHero = (container, hero) => {
  if (container) container.insertAdjacentHTML("beforeend", heroTmpl(hero));
};
