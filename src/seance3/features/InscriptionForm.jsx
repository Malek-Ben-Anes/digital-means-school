import { useState } from "react";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { InputText } from "../components/InputText";

export function InscriptionForm() {
  const [isWeekend, setIsWeekend] = useState(true);
  const [isNationalDay, setIsNationalDay] = useState(true);
  const [isConditionAccepted, setIsConditionAccepted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");

  const onValidate = () => {
    const content = {
      firstName: firstName,
      lastName: lastName,
      profession: profession,
      isWeekend: isWeekend,
      isNationalDay: isNationalDay,
      isConditionAccepted: isConditionAccepted,
    };

    // TODO Send Data to backend

    alert(JSON.stringify(content));
  };

  const onReset = () => {
    setFirstName("");
    setLastName("");
    setProfession("");
    setIsWeekend(false);
    setIsNationalDay(false);
    setIsConditionAccepted(false);
  };

  return (
    <div>
      <InputText
        id="idPrenom"
        name="firstname"
        value={firstName}
        onChange={setFirstName}
        text="Veuillez saisir votre prénom:"
        placeholder="Veuillez saisir votre prénom"
      />

      <InputText
        id="idNomDeFamille"
        name="nomDeFamille"
        text="Veuillez saisir votre Nom de famille:"
        placeholder="Veuillez saisir votre Nom de famille"
        value={lastName}
        onChange={setLastName}
      />

      <InputText
        id="idProfession"
        name="profession"
        text="Veuillez saisir votre profession:"
        placeholder="Veuillez saisir votre profession"
        value={profession}
        onChange={setProfession}
      />

      <br />
      <CheckBox
        text="Le jour est un week-end?"
        value={isWeekend}
        onChange={setIsWeekend}
      />

      <br />
      <CheckBox
        text="Le jour est une fête nationale?"
        value={isNationalDay}
        onChange={setIsNationalDay}
      />

      <br />
      <CheckBox
        text="Accepter les conditions"
        value={isConditionAccepted}
        onChange={setIsConditionAccepted}
      />
      <br />

      <br />
      <Button text="Reset" buttonClass="reset" onClick={onReset} />
      <Button text="Valider" buttonClass="primary" onClick={onValidate} />
    </div>
  );
}
