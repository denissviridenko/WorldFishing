export default function SliderItem({ tourImg, tourName, tourSelector }) {
  return (
    <div className="slider-item">
      <div className="slider-item__img" style={{ backgroundImage: `url(${tourImg})` }} />
      <div className={`slider-item__tour-container slider-item__tour-container_place_${tourSelector}`}>
        <h2 className="slider-item__title">{tourName}</h2>
        <button type="button" className="slider-item__button">Подробнее</button>
      </div>
    </div>
  );
}
