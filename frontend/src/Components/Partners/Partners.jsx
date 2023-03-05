import greatCatch from '../../images/Partners-1.svg';
import riverPerch from '../../images/Partners-2.svg';
import marlinFish from '../../images/Partners-3.svg';
import skwooshFishing from '../../images/Partners-4.svg';

export default function Partners() {
  return (
    <section className="partners">
      <h2 className="partners__title">Наши партнеры</h2>
      <div className="partners__container">
        <img className="partners__img" src={greatCatch} alt="greatCatch" />
        <img className="partners__img" src={riverPerch} alt="riverPerch" />
        <img className="partners__img" src={marlinFish} alt="marlinFish" />
        <img className="partners__img" src={skwooshFishing} alt="skwooshFishing" />
      </div>
    </section>
  );
}
