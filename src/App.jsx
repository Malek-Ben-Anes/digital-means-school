import { Button } from "./seance3/Button";
import { CheckBox } from "./seance3/CheckBox";
import { InputText } from "./seance3/InputText";

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

      <InputText
        id="idPrenom"
        name="prenom"
        text="Veuillez saisir votre prénom:"
        placeholder="Veuillez saisir votre prénom"
      />

      <br />

      <InputText
        id="idNomDeFamille"
        name="nomDeFamille"
        text="Veuillez saisir votre Nom de famille:"
        placeholder="Veuillez saisir votre Nom de famille"
      />

      <br />

      <InputText
        id="idProfession"
        name="profession"
        text="Veuillez saisir votre profession:"
        placeholder="Veuillez saisir votre profession"
      />

      <br />
      <Button text="Reset" buttonClass="reset" />
      <Button text="Valider" buttonClass="primary" />
    </form>
  );
}

export default App;
