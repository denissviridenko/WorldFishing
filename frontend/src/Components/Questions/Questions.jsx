import SmallForm from '../Forms/SmallForm/SmallForm';

export default function Questions() {
  return (
    <section className="questions">
      <span className="questions__span-title">Остались вопросы?</span>
      <span className="questions__span">Укажите ваш номер телефона и мы свяжемся с Вами</span>
      <SmallForm purpose="phone" />
    </section>
  );
}
