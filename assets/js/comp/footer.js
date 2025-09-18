const footerContainer = document.querySelector('.footer-container')

const footerTmpl = () => {
  return `

  <div class="footer">
        <div class="some">

            <a href="https://www.facebook.com/">
                <img src="assets/images/icons/square-facebook.svg" alt="facebook icon" class="someIcon">
            </a>

            <a href="https://www.instagram.com/">
                <img src="assets/images/icons/square-instagram.svg" alt="instagram icon" class="someIcon">
            </a>
        </div>

        <div class="logoName">
            
            <a href="#top">
                <img src="assets/images/logo/logo.png" alt="logo" class="logo">
            </a>

            <a href="#top">
                <h4>Gittes Glamping</h4>
            </a>
        </div>

    </footer>
    `;
};

export const footer = () => {
  if (footerContainer) {
    footerContainer.insertAdjacentHTML("beforeend", footerTmpl());
  }}