export function CheckBox({ text, value, onChange }) {
  return (
    <label class="checkbox-container">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span class="checkmark"></span>
      {text}
    </label>
  );
}
