export default function InfoSpan({ spanLogo, spanText, spanSelector }) {
  return (
    <div className="info-span">
      <img className="info-span__logo" src={spanLogo} alt="Иконка" />
      <span className={`info-span__text info-span__text_place_${spanSelector}`}>{spanText}</span>
    </div>
  );
}
