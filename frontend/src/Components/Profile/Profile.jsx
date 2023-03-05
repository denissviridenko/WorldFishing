import { useState, useContext } from 'react';
import Account from './Account';
import accountLogo from '../../images/Account.svg';
import bookingLogo from '../../images/Booking.svg';
import paymentLogo from '../../images/Payment.svg';
import helpLogo from '../../images/Help.svg';
import settingsLogo from '../../images/Settings.svg';
import exitLogo from '../../images/Exit.svg';
import ProfileListItem from './ProfileListItem';
import MyBookings from '../MyBookings/MyBookings';
import { CurrentUserContext } from '../CurrentUserContext';

export default function Profile({ onProfileChange, onLogout }) {
  const [activeTub, setActiveTub] = useState('account');
  const contextValue = useContext(CurrentUserContext);

  function handleTubClick(type) {
    setActiveTub(type);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Личный кабинет</h2>
      <div className="profile__main">
        <div className="profile__container">
          <div className="profile__account-info-container">
            <div className="profile__avatar" style={{ background: 'grey' }} />
            <div className="profile__account-info">
              <span className="profile__account-name">{contextValue.currentUser.name}</span>
              <span className="profile__account-email">{contextValue.currentUser.email}</span>
            </div>
          </div>
          <ul className="profile__list">
            <ProfileListItem onClick={handleTubClick} logo={accountLogo} text="Аккаунт" activeTub={activeTub} type="account" />
            <ProfileListItem onClick={handleTubClick} logo={bookingLogo} text="Мои бронирования" activeTub={activeTub} type="myBookings" />
            <ProfileListItem onClick={handleTubClick} logo={paymentLogo} text="Платежная информация" activeTub={activeTub} type="payment" />
          </ul>
          <ul className="profile__list">
            <ProfileListItem onClick={handleTubClick} logo={helpLogo} text="Помощь" activeTub={activeTub} type="help" />
            <ProfileListItem onClick={handleTubClick} logo={settingsLogo} text="Настройки" activeTub={activeTub} type="settings" />
            <ProfileListItem onClick={() => onLogout()} logo={exitLogo} text="Выход" activeTub={activeTub} type="exit" />
          </ul>
        </div>
        {activeTub === 'account' && (
        <Account onProfileChange={onProfileChange} />
        )}
        {activeTub === 'myBookings' && (<MyBookings />)}
      </div>
    </section>
  );
}
