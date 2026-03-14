export function CheckBox({ text, isChecked }) {
  return (
    <label class="checkbox-container">
      <input type="checkbox" checked={isChecked} />
      <span class="checkmark"></span>
      {text}
    </label>
  );
}
