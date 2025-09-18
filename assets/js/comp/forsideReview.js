import { fetchReviews } from "../fetch.js";

const reviews = await fetchReviews()
console.log(reviews); 

const frontpageReviewContainer = document.querySelector(".frontpage-review");

/* frontpageReviewContainer.innerHTML = `<div class="background"></div>;`; */
frontpageReviewContainer.innerHTML = `<h2 class="h2-rev">Vores gæster udtaler</h2>`;


const frontpageReviewTmpl = (rev) => {
    return `
    <div class="innerFrontpageReview">
        <h4 class="h4-revName">${rev.name}, ${rev.age} år</h4>
        <h4 class="h4-revStay">Har været på ${rev.stay}</h4>
        <p>${rev.review}</p>
    </div>
    `;
};

export const frontpageReview = () => {
  if (frontpageReviewContainer) {
    reviews.forEach((element) => {
      frontpageReviewContainer.insertAdjacentHTML("beforeend", frontpageReviewTmpl(element));
    });
  }
};
