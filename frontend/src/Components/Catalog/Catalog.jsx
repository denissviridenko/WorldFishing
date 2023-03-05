import seychelles from '../../images/Seychelles.png';
import sweden from '../../images/Sweden.png';
import maldives from '../../images/Maldives.png';
import costaRica from '../../images/Costa-Rica.png';
import colombia from '../../images/Colombia.png';
import brasil from '../../images/Brasil.png';
import panama from '../../images/Panama.png';
import bahamas from '../../images/Bahamas.png';
import india from '../../images/India.png';
import norway from '../../images/Norway.png';
import cuba from '../../images/Cuba.png';
import finland from '../../images/Finland.png';
import CatalogItem from './CatalogItem';

export default function Catalog() {
  return (
    <section className="catalog">
      <div className="catalog__row catalog__row_place_first">
        <CatalogItem tourImg={seychelles} tourName="Сейшелы" />
        <CatalogItem tourImg={sweden} tourName="Швеция" />
        <CatalogItem tourImg={maldives} tourName="Мальдивы" />
        <CatalogItem tourImg={costaRica} tourName="Коста-Рика" />
      </div>
      <div className="catalog__row catalog__row_place_second">
        <CatalogItem tourImg={colombia} tourName="Колумбия" />
        <CatalogItem tourImg={brasil} tourName="Бразилия" />
        <CatalogItem tourImg={panama} tourName="Панама" />
        <CatalogItem tourImg={bahamas} tourName="Багамские острова" />
      </div>
      <div className="catalog__row catalog__row_place_third">
        <CatalogItem tourImg={india} tourName="Индия" />
        <CatalogItem tourImg={norway} tourName="Норвегия" />
        <CatalogItem tourImg={cuba} tourName="Куба" />
        <CatalogItem tourImg={finland} tourName="Финляндия" />
      </div>
    </section>
  );
}
