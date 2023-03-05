import Auth from '../Auth/Auth';

export default function Login({ onSubmit }) {
  return (
    <Auth
      login
      link="sign-up"
      buttonText="Войти"
      title="Войти в личный кабинет"
      spanText="Ещё не зарегистрированы? "
      linkText="Регистрация"
      onSubmit={onSubmit}
    />
  );
}
