const navBurger = document.querySelector(".nav-burger");

const navTmpl = () => {
    return `
        <div class="burger">
            <img src="../assets/images/icons/bars-solid.svg" alt="menu"></img>
        </div>

    <ul class="nav-list"
      <li class="nav-item"><a href="#ophold" class="nav-link">Ophold</a></li>
      <li class="nav-item"><a href="#kontakt" class="nav-link">Kontakt</a></li>
      <li class="nav-item"><a href="#aktiviteter" class="nav-link">Aktiviteter</a></li>
      <li class="nav-item"><a href="#minListe" class="nav-link">Min liste</a></li>
    </ul>
    `;
}

export const nav = () => {
  if (navBurger) {
    navBurger.insertAdjacentHTML("beforeend", navTmpl());

    const navUl = document.querySelector(".nav-list");
    const burgerBtn = document.querySelector(".burger");
  
    burgerBtn.addEventListener("click", () => {
      navUl.classList.toggle("show");
    });

    navUl.addEventListener('click', () => {
        navUl.classList.remove('show')  
})}
};

