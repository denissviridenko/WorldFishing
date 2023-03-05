import { Link } from 'react-router-dom';
import SmallForm from '../Forms/SmallForm/SmallForm';
import NavigationFooter from '../NavigationFooter/NavigationFooter';
import emailLogo from '../../images/email.svg';
import youtube from '../../images/youtube.svg';
import whatsapp from '../../images/whatsapp.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <NavigationFooter />
        <div className="footer__form-container">
          <div className="footer__form-span-container">
            <img src={emailLogo} alt="Рассылка" className="footer__form-image" />
            <span className="footer__form-span-accent">
              Подпишитесь на нашу рассылку
              {' '}
              <span className="footer__form-span">новости, обзоры, акции</span>
            </span>
          </div>
          <SmallForm purpose="email" />
        </div>
      </div>
      <div className="footer__container">
        <ul className="footer__social-list">
          <li className="footer__social-item">
            <Link to="#" className="footer__social-link">
              <img className="footer__social-img" src={youtube} alt="Youtube" />
            </Link>
          </li>
          <li className="footer__social-item">
            <Link to="#" className="footer__social-link">
              <img className="footer__social-img" src={whatsapp} alt="Whatsapp" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
