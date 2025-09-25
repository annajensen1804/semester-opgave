const infoTmpl = (info) => `
  <div class="innerFrontpageText activities-info-box">
    <h2>${info?.heading || "Ingen skal kede sig hos Gitte"}</h2>
    <div class="innerTextImage">
      <p>${info?.text || ""}</p>
    </div>
  </div>
`;

export const aktiviteterInfo = (container, info) => {
  if (container) container.insertAdjacentHTML("beforeend", infoTmpl(info));
};