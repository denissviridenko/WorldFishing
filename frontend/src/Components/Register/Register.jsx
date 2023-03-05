import Auth from '../Auth/Auth';

export default function Register({ onSubmit }) {
  return (
    <Auth
      link="sign-in"
      buttonText="Зарегистрироваться"
      title="Регистрация"
      spanText="Уже Зарегистрированы? "
      linkText="Войти"
      onSubmit={onSubmit}
    />
  );
}
