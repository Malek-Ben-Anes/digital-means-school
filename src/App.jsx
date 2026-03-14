import { useState } from "react";

function App() {
  const [isTansactionOk, setIsTransactionOk] = useState(false);

  return (
    <form>
      <Input isMandatory={true} label="saisir votre prénom" />
      <CheckBox label="Verifier solde" onVerifieEnfant={setIsTransactionOk} />
      <br />
      {isTansactionOk ? "la transaction est ok" : " la transation n'est pas ok"}
    </form>
  );
}

function Input({ label, isMandatory }) {
  return (
    <>
      <label>
        {label}
        <span style={{ color: "red" }}>{isMandatory && "*"}</span>
      </label>
      <input type="text" />
    </>
  );
}

function CheckBox({ label, onVerifieEnfant }) {
  const [checked, setChecked] = useState(false);

  const toggle = (e) => {
    const checked = e.target.checked;
    setChecked(checked);

    onVerifieEnfant(checked);
  };

  return (
    <>
      <label>{label ?? "Veuillez cocher:"}</label>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "c'est selectionné" : "n'est pas selectionné"}
    </>
  );
}

export default App;
