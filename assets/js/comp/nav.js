const navBurger = document.querySelector(".nav-burger");

const navTmpl = () => {
    return `
        <div class="burger">
            <img src="../assets/images/icons/bars-solid.svg" alt="menu"></img>
        </div>

    <ul class="nav-list">
      <li class="nav-item"><a href="ophold.html" class="nav-link">Ophold</a></li>
      <li class="nav-item"><a href="kontakt.html" class="nav-link">Kontakt</a></li>
      <li class="nav-item"><a href="aktiviteter.html" class="nav-link">Aktiviteter</a></li>
      <li class="nav-item"><a href="favoritter.html" class="nav-link">Min liste</a></li>
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

    document.addEventListener('click', (event) => {
        if(!burgerBtn.contains(event.target) && !navUl.contains(event.target)) {
            navUl.classList.remove("show");
        }     
})}
};

