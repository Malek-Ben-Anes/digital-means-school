export function Button({ text, buttonClass }) {
  return (
    <button
      class={"btn-" + buttonClass}
      style={{ marginRight: 10, marginTop: 4 }}
    >
      {text}
    </button>
  );
}
