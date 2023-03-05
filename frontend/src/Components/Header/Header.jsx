import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import phoneLogo from '../../images/phone-symbol.svg';
import { routeNames } from '../../utils/constants';

export default function Header() {
  return (
    <header className="header">
      <Link className="header__logo-link" to={routeNames.main}>
        <img className="header__logo" src={logo} alt="Лого" />
      </Link>
      <h1 className="header__title">
        РЫБОЛОВНЫЕ ПУТЕШЕСТВИЯ ПО ВСЕМУ МИРУ!
      </h1>
      <a className="header__phone-link" href="tel:77777777777">
        <span className="header__phone-span">+7(777)777-77-77</span>
        <img className="header__phone-logo" src={phoneLogo} alt="Позвонить" />
      </a>
    </header>
  );
}
