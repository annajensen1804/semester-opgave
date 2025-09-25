// Én simpel export: indsætter formular og viser en enkel alert ved submit.
export function renderKontaktForm(el) {
  if (!el) return;
  el.innerHTML = `
    <form class="form" novalidate>
      <label class="field">
        <input type="text" name="navn" placeholder="Navn" required>
      </label>

      <label class="field">
        <input type="email" name="email" placeholder="Email" required>
      </label>

      <label class="field select-field">
        <select name="emne" required>
          <option value="" selected disabled>Hvad drejer henvendelsen sig om?</option>
          <option value="booking">Booking</option>
          <option value="gavekort">Gavekort</option>
          <option value="praktisk">Praktisk info</option>
          <option value="andet">Andet</option>
        </select>
      </label>

      <label class="field">
        <textarea name="besked" rows="5" placeholder="Besked (skriv dato’er ved booking)"></textarea>
      </label>

      <button class="btn" type="submit">INDSEND</button>
    </form>
  `;

  const form = el.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) return form.reportValidity();
    alert("Tak! Din besked er sendt.");
    form.reset();
  });
}
