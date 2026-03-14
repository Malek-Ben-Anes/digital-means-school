export function InputText({ id, name, text, placeholder, value, onChange }) {
  return (
    <label htmlFor={id} class="input-container">
      {text}
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
}
