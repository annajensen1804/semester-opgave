export const wireDrop = (container) => {
  if (!container) return;

  // Finder alle elementer på siden der har klassen "read-more-btn"
  // (det er de knapper man kan klikke på for at vise/skjule indhold)
  container.querySelectorAll(".read-more-btn").forEach((btn) => {

    // Tilføjer en klik-hændelse til hver knap
    btn.addEventListener("click", () => {
      // Finder den nærmeste forælder med klassen "info-box"
      // (så vi kun påvirker indholdet i den boks, hvor knappen blev klikket)
      const box = btn.closest(".info-box");

      // Finder det skjulte indhold inde i boksen
      const content = box.querySelector(".dropdown-content");

      // Finder pilen inde i knappen
      const arrow = btn.querySelector(".dropdown-arrow");

      // Tjekker om indholdet allerede har klassen "open" (dvs. om det er åbent)
      const open = content.classList.contains("open");

      // Hvis indholdet er lukket, tilføjes klassen "open" (så det åbnes).
      // Hvis det er åbent, fjernes klassen "open" (så det lukkes).
      content.classList.toggle("open", !open);

      // Gør præcis det samme med pilen, så dens udseende passer til om indholdet er åbent eller lukket
      arrow.classList.toggle("open", !open);
      
      // Fjerner markeringen/fokus fra knappen efter klik,
      // så den ikke står med en blå ramme eller highlight bagefter
      btn.blur();
    });
  });
};


const LIKE_KEY = "likedActivities";

const getLikes = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(LIKE_KEY)) || []);
  } catch {
    return new Set();
  }
};
const setLikes = (s) => localStorage.setItem(LIKE_KEY, JSON.stringify([...s]));

const cardTmpl = (a, liked) => `
  <article class="activity-card">
    <div class="image-wrap">
      <img src="${a.image}" alt="${a.title}" />
    </div>

    <div class="title-flag">${a.title}</div>

    <div class="info-box">
      <div class="meta">${a.date}<br/>kl. ${a.time}</div>

      <button class="like ${liked ? "liked" : ""}" data-id="${
  a._id
}" aria-label="Like">
        <span>❤</span>
      </button>

      <button class="read-more-btn" data-id="${a._id}">
        Læs mere <span class="dropdown-arrow">▼</span>
      </button>

      <div class="dropdown-content">
        <div class="dropdown-text">${a.description}</div>
      </div>
    </div>
  </article>
`;

const applyAlternating = (container) => {
  [...container.querySelectorAll(".activity-card")].forEach((c, i) => {
    if (i % 2 === 1) {
      c.classList.add("reverse");
    }
  });
};

const wireLikes = (container) => {
  container.querySelectorAll(".like").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const likes = getLikes();
      if (likes.has(id)) {
        likes.delete(id);
        btn.classList.remove("liked");
      } else {
        likes.add(id);
        btn.classList.add("liked");
      }
      setLikes(likes);
    });
  });
};

export const aktiviteterList = (container, activities = []) => {
  if (!container) return;
  const liked = getLikes();
  container.innerHTML = activities
    .map((a) => cardTmpl(a, liked.has(a._id)))
    .join("");
  applyAlternating(container);
  wireLikes(container);
  wireDropdowns(container); // <-- nu kaldes dropdown-modulet
};