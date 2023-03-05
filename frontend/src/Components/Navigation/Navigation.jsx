import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { routeNames } from '../../utils/constants';

export default function Navigation({ loggedIn, tours }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to={loggedIn ? routeNames.booking : routeNames.login}>
            Бронирование
          </Link>
        </li>
        <li className="navigation__item">
          <Menu
            className="navigation__menu"
            menuButton={<MenuButton className="navigation__menu-button">Страны</MenuButton>}
            transition
          >
            <div className="navigation___menu-triangle navigation___menu-triangle_place_countries" />
            <div className="navigation__menu-container navigation__menu-container_place_countries">
              <div className="navigation__menu-column navigation__menu-column_place_left">
                {tours.map((tour) => (
                  <MenuItem key={uuid()} className="navigation__menu-item">
                    <Link to={`/${tour.countryEng}`}>
                      {tour.country}
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </div>
          </Menu>
        </li>
        <li className="navigation__item">
          <Menu
            className="navigation__menu navigation__menu_place_seasons"
            menuButton={<MenuButton className="navigation__menu-button">Сезоны</MenuButton>}
            transition
          >
            <div className="navigation___menu-triangle navigation___menu-triangle_place_seasons" />
            <div className="navigation__menu-container navigation__menu-container_place_seasons">
              <div className="navigation__menu-column navigation__menu-column_place_left">
                <MenuItem className="navigation__menu-item">Зима</MenuItem>
                <MenuItem className="navigation__menu-item">Весна</MenuItem>
                <MenuItem className="navigation__menu-item">Лето</MenuItem>
                <MenuItem className="navigation__menu-item">Осень</MenuItem>
              </div>

            </div>
          </Menu>
        </li>
        <li className="navigation__item">
          О нас
        </li>
      </ul>
    </nav>
  );
}
