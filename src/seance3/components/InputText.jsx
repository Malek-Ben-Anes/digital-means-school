export function InputText({ id, name, text, placeholder, value, onChange }) {
  return (
    <div className="mb-8">
      <label htmlFor={id} className="form-label">
        {text}
        <input
          className="form-control"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder={placeholder}
          name={name}
        />
      </label>
    </div>
  );
}
