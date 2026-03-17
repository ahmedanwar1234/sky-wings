export default function AnimatedButton({ text = "Button" }) {
  return (
    <button className="btn-31">
      <span className="text-container">
        <span className="text">{text}</span>
      </span>
    </button>
  );
}