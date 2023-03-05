export default function CatalogItem({ tourImg, tourName }) {
  return (
    <div className="catalog__item" style={{ backgroundImage: `url(${tourImg})` }}>
      <h3 className="catalog__title">{tourName}</h3>
    </div>
  );
}
