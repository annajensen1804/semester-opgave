import { frontpageHero } from "./comp/forsideHero.js";
import { nav } from "./comp/nav.js";
import { frontpageText } from "./comp/forsideText.js";
import { frontpageReview } from "./comp/forsideReview.js";
import { opholdHeader } from "./comp/opholdHeader.js";
import { Textbox } from "./comp/opholdTextbox.js";
import { footer } from "./comp/footer.js";
import { Activities } from "./comp/aktiviteter.js";
import { aktiviteterList } from "./comp/aktiviteterDropdown.js";
import { aktiviteterHero } from "./comp/aktiviteterHeader.js";
import { renderKontaktForm } from "./comp/kontaktFormular.js";
import { renderKontaktHeader } from "./comp/kontaktHeader.js";


renderKontaktHeader()
renderKontaktForm()
aktiviteterHero()
aktiviteterList()
Activities()
frontpageHero()
nav()
frontpageText()
frontpageReview();
opholdHeader()
Textbox()
footer()