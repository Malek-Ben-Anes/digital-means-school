export function Button({ text, buttonClass, onClick }) {
  return (
    <button
      type="text"
      class={"btn-" + buttonClass}
      style={{ marginRight: 10, marginTop: 4 }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
