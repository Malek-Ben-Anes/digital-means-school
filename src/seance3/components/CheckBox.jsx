export function CheckBox({ text, value, onChange }) {
  return (
    <div className="mb-3 form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span></span>
        {text}
      </label>
    </div>
  );
}
