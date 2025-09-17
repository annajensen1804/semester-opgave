
const header = document.querySelector(".opholdHeader")

export const opholdHeader = () => {
  
  if(header) {          /* Har tilføjet */
    const header = document.querySelector(".opholdHeader");
    header.innerHTML = `
    <div>
      <img src="assets/images/heros/ophold.jpg" alt="viser indersiden af en af vores telte">
      <h1>Vores ophold</h1>
    </div>
  `;
  }
  
};

