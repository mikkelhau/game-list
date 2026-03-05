import "../styles/buttonbig.css";

export default function ButtonBig({ children, onClick }) {
  return (
    <button className="button-big" onClick={onClick}>
      {children}
    </button>
  );
}
