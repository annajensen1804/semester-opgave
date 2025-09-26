import { fetchStays } from "../fetch.js";
const ophold = document.querySelector(".ophold");

// Helper to build image URL
const getImageUrl = (image) => {
    if (image.startsWith("http")) {
        return image;
    } else {
        return `assets/images/ophold/${image}`;
    }
};


const opholdListTmpl = (opholdData) => {
    return `
    <article data-ophold-id="${opholdData._id}">
        <h3>${opholdData.title}</h3>
        <p>Antal personer: ${opholdData.numberOfPersons}</p>
        <p>Pris: ${opholdData.price}</p>
        <img src="${getImageUrl(opholdData.image)}" alt="${opholdData.title}">
        <button class="ophold-readmore" data-ophold-id="${opholdData._id}">Læs mere</button>
    </article>
    `;
};

export async function renderOphold() {
    try {
        const opholdData = await fetchStays();
        if (Array.isArray(opholdData)) {
            ophold.innerHTML = opholdData.map(opholdListTmpl).join("");
            // Add event listeners to buttons
            ophold.querySelectorAll('.ophold-readmore').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const opholdId = btn.getAttribute('data-ophold-id');
                    // Save id to localStorage (or use URL param)
                    localStorage.setItem('selectedOpholdId', opholdId);
                    window.location.href = 'ophold-info.html';
                });
            });
        } else {
            ophold.innerHTML = "<p>Ingen ophold fundet.</p>";
        }
    } catch (error) {
        ophold.innerHTML = `<p>Fejl ved indlæsning af ophold: ${error.message}</p>`;
    }
}