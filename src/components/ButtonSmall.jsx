import "../styles/buttonsmall.css";

export default function ButtonSmall({ children, onClick, type }) {
  return (
    <button className="button-small" onClick={onClick} type={type}>
      {children}
    </button>
  );
}
