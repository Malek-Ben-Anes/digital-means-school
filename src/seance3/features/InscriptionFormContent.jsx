import { useState } from "react";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { InputText } from "../components/InputText";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  profession: "",
  description: "",
  isWeekend: false,
  isNationalDay: false,
  isConditionAccepted: false,
};

export function InscriptionFormContent() {
  const [content, setContent] = useState(INITIAL_STATE);

  const onValidate = () => {
    alert(JSON.stringify(content));
  };

  const onReset = () => {
    setContent(INITIAL_STATE);
  };

  const onChange = (fieldName, newValue) => {
    setContent({
      ...content,
      [fieldName]: newValue,
    });
  };

  return (
    <div>
      <InputText
        id="idPrenom"
        name="firstname"
        value={content.firstName}
        onChange={(value) => onChange("firstName", value)}
        text="Veuillez saisir votre prénom:"
        placeholder="Veuillez saisir votre prénom"
      />

      <InputText
        id="idNomDeFamille"
        name="lastName"
        text="Veuillez saisir votre Nom de famille:"
        placeholder="Veuillez saisir votre Nom de famille"
        value={content.lastName}
        onChange={(value) => onChange("lastName", value)}
      />

      <InputText
        id="idProfession"
        name="profession"
        text="Veuillez saisir votre profession:"
        placeholder="Veuillez saisir votre profession"
        value={content.profession}
        onChange={(value) => onChange("profession", value)}
      />

      <InputText
        id="idDescription"
        name="description"
        text="Une description"
        placeholder="Veuillez saisir une description"
        value={content.description}
        onChange={(value) => onChange("description", value)}
      />

      <br />
      <CheckBox
        text="Le jour est un week-end?"
        value={content.isWeekend}
        onChange={(value) => onChange("isWeekend", value)}
      />

      <br />
      <CheckBox
        text="Le jour est une fête nationale?"
        value={content.isNationalDay}
        onChange={(value) => onChange("isNationalDay", value)}
      />

      <br />
      <CheckBox
        text="Accepter les conditions"
        value={content.isConditionAccepted}
        onChange={(value) => onChange("isConditionAccepted", value)}
      />
      <br />

      <br />
      <Button text="Reset" buttonClass="reset" onClick={onReset} />
      <Button text="Valider" buttonClass="primary" onClick={onValidate} />
    </div>
  );
}
