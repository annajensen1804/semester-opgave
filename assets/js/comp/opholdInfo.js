
import { fetchStays } from "../fetch.js";

const opholdInfoSection = document.querySelector('.opholdInfo');

export async function renderOpholdInfo() {
	const opholdId = localStorage.getItem('selectedOpholdId');
	if (!opholdId) {
		opholdInfoSection.innerHTML = '<p>Ingen ophold valgt.</p>';
		return;
	}
	try {
		const opholdData = await fetchStays();
		const ophold = Array.isArray(opholdData) ? opholdData.find(o => o._id === opholdId) : null;
		if (!ophold) {
			opholdInfoSection.innerHTML = '<p>Ophold ikke fundet.</p>';
			return;
		}
		opholdInfoSection.innerHTML = `
			<article>
				<h2>${ophold.title}</h2>
				<img src="assets/images/ophold/${ophold.image}" alt="${ophold.title}">
				<p>Antal personer: ${ophold.numberOfPersons}</p>
				<p>Pris: ${ophold.price}</p>
				<p>${ophold.description || ''}</p>
			</article>
		`;
	} catch (error) {
		opholdInfoSection.innerHTML = `<p>Fejl ved indlæsning: ${error.message}</p>`;
	}
}
