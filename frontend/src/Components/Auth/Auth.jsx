import { Link } from 'react-router-dom';
import AuthForm from '../Forms/AuthForm/AuthForm';
import ThirdPartyAuth from '../ThirdPartyAuth/ThirdPartyAuth';

export default function Auth({
  buttonText, title, spanText, linkText, link, login, onSubmit,
}) {
  return (
    <section className="auth">
      <h2 className="auth__title">{title}</h2>
      <ThirdPartyAuth />
      <AuthForm buttonText={buttonText} login={login} onSubmit={onSubmit} />
      <span className={`auth__span ${login && 'auth__span_place_login'}`}>
        { spanText }
        <Link className="auth__link" to={link}>{linkText}</Link>
      </span>
      {!login && (
      <span className="auth__span-consent">
        Нажимая «Зарегистрироваться», вы подтверждаете,
        что ознакомлены, полностью согласны и
        принимаете условия пользовательского соглашения
      </span>
      ) }
    </section>
  );
}
