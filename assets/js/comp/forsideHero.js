const headerContainer = document.querySelector(".header-container");

const frontpageHeroTmpl = () => {
  return `

  <div class="header" id="top">
        <img src="../assets/images/heros/forside.jpg" alt="heroImage" class="hero-image">

        <div class="overlay"></div>

        <div class="frontText">
        
            <img src="../assets/images/logo/logo.png" alt="logo" class="logo">
        
            <div class="name">
              <h1 class="h1-small">Gittes</h1>
              <h1 class="h1-big">Glamping</h1>
            </div>

            <button class="btnFrontpage">BOOK NU</button>

        </div>

    <header/>
    `;
};

export const frontpageHero = () => {
  if (headerContainer) {
    headerContainer.insertAdjacentHTML("beforeend", frontpageHeroTmpl());
  }}