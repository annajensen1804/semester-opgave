import { fetchActivities } from "../fetch.js";

const activities = await fetchActivities();
console.log(activities);

const ActivitiesContainer = document.querySelector(
  ".activities"
);

if (ActivitiesContainer) {
  ActivitiesContainer.innerHTML = `<h2 class="h2-activities">Vores aktiviteter</h2>`;
}

const ActivityTmpl = (act) => {
  return `
    <div class="innerActivity">
      <img src="${act.image}" alt="${act.title}" class="activity-img"/>
      <h4 class="h4-activityTitle">${act.title}</h4>
      <p class="p-activityMeta">${act.date}, kl. ${act.time}</p>
      <p class="p-activityDesc">${act.description}</p>
    </div>
  `;
};

export const Activities = () => {
  if (ActivitiesContainer) {
    activities.forEach((element) => {
      ActivitiesContainer.insertAdjacentHTML(
        "beforeend",
        ActivityTmpl(element)
      );
    });
  }
};
