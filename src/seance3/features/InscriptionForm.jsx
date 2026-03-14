import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { InputText } from "../components/InputText";

export function InscriptionForm() {
  const isWeekend = false;
  const isNationalDay = false;

  // CallBack
  const onAlert = () => {
    alert("this is an alert");
  };

  const onReset = () => {
    alert("Reset forms");
  };

  return (
    <div>
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

      <CheckBox text="Le jour est un week-end?" isChecked={isWeekend} />

      <br />
      <CheckBox
        text="Le jour est une fête nationale?"
        isChecked={isNationalDay}
      />

      <br />
      <CheckBox text="Accepter les conditions" />
      <br />

      <br />
      <Button text="Reset" buttonClass="reset" onClick={onReset} />
      <Button text="Valider" buttonClass="primary" onClick={onAlert} />
    </div>
  );
}
