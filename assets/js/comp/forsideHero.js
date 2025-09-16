const headerContainer = document.querySelector(".header-container");

const frontpageHeroTmpl = () => {
  return `
        <img src="../assets/images/heros/forside.jpg" alt="heroImage" class="hero-image">

        <div class="frontText">
        
            <img src="../assets/images/logo/logo.png" alt="logo">
        
            <h2>Gittes</h2>
            <h1>Glamping</h1>

            <button class="btnFrontpage">Book nu</button>

        </div>
    `;
};

export const frontpageHero = () => {
  if (headerContainer) {
    headerContainer.insertAdjacentHTML("beforeend", frontpageHeroTmpl());
  }}