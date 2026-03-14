import { CheckBox } from "./seance3/CheckBox";

function App() {
  const isWeekend = true;
  const isNationalDay = true;

  return (
    <form>
      <CheckBox text="Le jour est un week-end?" isChecked={isWeekend} />

      <br />
      <CheckBox text="Accepter les conditions" />

      <br />
      <CheckBox
        text="Le jour est une fête nationale?"
        isChecked={isNationalDay}
      />

      <br />
      <label htmlFor="champPrenom">Veuillez saisir votre prénom:</label>
      <input
        id="champPrenom"
        type="text"
        name="champlibre"
        placeholder="Veuillez saisir votre prénom"
      />

      <br />
      <label htmlFor="champPrenom">Veuillez saisir votre Nom de famille:</label>
      <input
        id="champPrenom"
        type="text"
        name="champlibre"
        placeholder="Veuillez saisir votre Nom de famille"
      />

      <br />
      <label htmlFor="champPrenom">Veuillez saisir votre profession:</label>
      <input
        id="champPrenom"
        type="text"
        name="champlibre"
        placeholder="Veuillez saisir votre profession"
      />
      <br />
      <label>Saisir prénom</label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
