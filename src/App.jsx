import { useState } from "react";

function App() {
  return (
    <form>
      <input id="weekend-mars" type="checkBox" name="weekend" value={false} />
      <label htmlFor="weekend-mars">Le jour est un week-end?</label>

      <CheckBox text="Accepter les conditions" />

      <br />
      <input type="checkBox" className="" name="jourferie" value={true} />
      <label>Le jour est un week-end?</label>
      <br />
      <label htmlFor="champPrenom">Veuillez saisir votre prénom:</label>
      <input
        id="champPrenom"
        type="text"
        name="champlibre"
        placeholder="Veuillez saisir votre prénom"
      />
      <br />
      <label>Saisir prénom</label>
      <button type="submit">Submit</button>
    </form>
  );
}

function CheckBox({ text }) {
  return (
    <label class="checkbox-container">
      <input type="checkbox" />
      <span class="checkmark"></span>
      {text}
    </label>
  );
}

export default App;
