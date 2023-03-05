import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import avatarLogo from '../../images/profile-user.svg';
import searchLogo from '../../images/search-logo.svg';
import { routeNames } from '../../utils/constants';
import { CurrentUserContext } from '../CurrentUserContext';

export default function NavigationAuth({ loggedIn }) {
  const contextValue = useContext(CurrentUserContext);
  const [isSearchOpened, setIsSearchOpened] = useState(false);

  function handleSearch() {
    setIsSearchOpened(!isSearchOpened);
  }

  return (
    <nav className="navigation-auth">
      <ul className="navigation-auth__list">
        <li className="navigation-auth__item navigation-auth__search">
          <form className="navigation-auth__search-form">
            <input
              className={`navigation-auth__search-form-input ${isSearchOpened ? 'navigation-auth__search-form-input_active' : ''}`}
              id="search"
              type="text"
              placeholder="Поиск по сайту"
            />
            <button onClick={handleSearch} className="navigation-auth__button" type="button">
              <img className="navigation-auth__item-seacrh-img" src={searchLogo} alt="Поиск" />
            </button>
          </form>
        </li>
        {!loggedIn ? (
          <>
            <li className="navigation-auth__item navigation-auth__login">
              <NavLink to={routeNames.login} className="navigation-auth__link">Войти</NavLink>
            </li>
            <li className="navigation-auth__item navigation-auth__register">
              <NavLink to={routeNames.register} className="navigation-auth__link">Регистрация</NavLink>
            </li>
          </>
        ) : (
          <li className="navigation-auth__item navigation-auth__login">
            <span className="navigation-auth__span">{contextValue.currentUser.email}</span>
          </li>
        )}
        {loggedIn && (
        <li className="navigation-auth__item navigation-auth__profile">
          <NavLink to={routeNames.profile} className="navigation-auth__link">
            <img className="navigation-auth__item-img" src={avatarLogo} alt="Профиль" />
          </NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
}
