import { NavLink } from 'react-router-dom';

export default function NavigationFooter() {
  return (
    <nav className="navigation-footer">
      <div className="navigation-footer__container">
        <h3 className="navigation-footer__title">Компания</h3>
        <ul className="navigation-footer__list">
          <li className="navigation-footer__item">
            <NavLink to="#" className="navigation-footer__link">О нас</NavLink>
          </li>
          <li className="navigation-footer__item">
            <NavLink to="#" className="navigation-footer__link">Наша команда</NavLink>
          </li>
          <li className="navigation-footer__item">
            <NavLink to="#" className="navigation-footer__link">Вакансии</NavLink>
          </li>
        </ul>
      </div>
      <div className="navigation-footer__container">
        <h3 className="navigation-footer__title">Информация</h3>
        <ul className="navigation-footer__list">
          <li className="navigation-footer__item">
            <NavLink to="#" className="navigation-footer__link">Вопрос-ответ</NavLink>
          </li>
          <li className="navigation-footer__item">
            <NavLink to="#" className="navigation-footer__link">Отзывы</NavLink>
          </li>
        </ul>
      </div>
      <div className="navigation-footer__container">
        <h3 className="navigation-footer__title">Контакты</h3>
        <ul className="navigation-footer__list">
          <li className="navigation-footer__item">
            <NavLink to="#" className="navigation-footer__link">Как нас найти</NavLink>
          </li>
          <li className="navigation-footer__item">
            <NavLink to="#" className="navigation-footer__link">Реквизиты</NavLink>
          </li>
        </ul>
      </div>

    </nav>
  );
}
