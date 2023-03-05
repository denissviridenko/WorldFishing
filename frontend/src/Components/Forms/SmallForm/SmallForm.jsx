export default function SmallForm({ purpose }) {
  return (
    <form className="small-form" action="post">
      <input className={`small-form__input ${purpose === 'email' ? 'small-form__input_purpose_email' : ''}`} type={purpose === 'phone' ? 'tel' : 'email'} placeholder={`${purpose === 'phone' ? '+7(999)945-77-77' : 'Введите ваш email'}`} />
      <button className="small-form__button" type="submit">{`${purpose === 'phone' ? 'Заказать звонок' : 'Подписаться'}`}</button>
    </form>
  );
}
