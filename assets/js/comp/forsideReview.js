import { fetchReviews } from "../fetch.js";

const reviews = await fetchReviews()

const frontpageReviewContainer = document.querySelector(".frontpage-review");

const frontpageReviewTmpl = (rev) => {
    return `
    <div class="innerFrontpageReview">
        <h2>Vores gæster udtaler</h2>
        <p>${rev.name}, ${rev.age} år</p>
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
