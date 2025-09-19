const frontpageTextContainer = document.querySelector(".frontpage-text");

const frontpageTextTmpl = () => {
    return `
    
    <div class="innerFrontpageText">
        
        <h2>Kom og prøv glamping hos Gitte!</h2>
        
        <div class="innerTextImage">
          <p>Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter.</p>

          <img src="../assets/images/heros/gitte.jpg" alt="Gitte" class="gitte">
        </div>

        <button class="frontpageTextBtn">SE VORES OPHOLD</button>

    </div>
    `;
}

export const frontpageText = () => {
  if (frontpageTextContainer) {
    frontpageTextContainer.insertAdjacentHTML("beforeend", frontpageTextTmpl());
  }}