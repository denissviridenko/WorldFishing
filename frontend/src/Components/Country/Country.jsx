import ReserveLink from '../ReserveLink/ReserveLink';

export default function Country({ tour }) {
  return (
    <section className="country">
      <span className="country__location">{`Главная/Страны - ${tour.country}`}</span>
      <h2 className="country__title">{tour.country}</h2>
      <div style={{ backgroundImage: `url(${tour.backgroundImg})` }} className="country__img" />
      <div className="country__container">
        <p className="country__paragraph">
          {tour.description}
        </p>
        <ReserveLink />
      </div>

    </section>
  );
}
