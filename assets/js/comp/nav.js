const navBurger = document.querySelector(".nav-burger");

const navTmpl = () => {
    return `
        <div class="burger">
            <img src="../assets/images/icons/bars-solid.svg" alt="menu"></img>
        </div>
    `
}

export const nav = () => {
  if (navBurger) {
    navBurger.insertAdjacentHTML("beforeend", navTmpl());
  }
};
