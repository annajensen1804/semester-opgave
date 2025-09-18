const headerContainer = document.querySelector(".header-container");

const frontpageHeroTmpl = () => {
  return `

  <div class="header" id="top">
        <img src="../assets/images/heros/forside.jpg" alt="heroImage" class="hero-image">

        <div class="overlay"></div>

        <div class="frontText">
        
            <img src="../assets/images/logo/logo.png" alt="logo" class="logo">
        
            <h2>Gittes</h2>
            <h1>Glamping</h1>

            <button class="btnFrontpage">BOOK NU</button>

        </div>

    <header/>
    `;
};

export const frontpageHero = () => {
  if (headerContainer) {
    headerContainer.insertAdjacentHTML("beforeend", frontpageHeroTmpl());
  }}