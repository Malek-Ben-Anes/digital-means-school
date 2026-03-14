export function InputText({ id, name, text, placeholder }) {
  return (
    <label htmlFor={id} class="input-container">
      {text}
      <input id={id} type="text" placeholder={placeholder} name={name} />
    </label>
  );
}
