import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../../CurrentUserContext';

export default function AccountForm({ onProfileChange }) {
  const contextValue = useContext(CurrentUserContext);

  const {
    register,
    reset,
    formState: {
      isValid, isDirty,
    },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
  });

  useEffect(() => {
    reset({
      name: contextValue.currentUser.name,
      email: contextValue.currentUser.email,
      phone: contextValue.currentUser.phone,
      surname: contextValue.currentUser.surname || 'Не заполнено',
    });
  }, [contextValue.currentUser, reset]);

  function onSubmit(data) {
    onProfileChange(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="account-form" method="post">
      <label className="account-form__label" htmlFor="name">
        Имя
        <input
          {...register('name', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 2,
              message: 'Минимум 2 символа',
            },
            maxLength: {
              value: 30,
              message: 'Максимум 30 символов',
            },
          })}
          type="text"
          className="account-form__input"
          id="name"
        />
      </label>
      <label className="account-form__label" htmlFor="surname">
        Фамилия
        <input
          {...register('surname', {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 2,
              message: 'Минимум 2 символа',
            },
            maxLength: {
              value: 30,
              message: 'Максимум 30 символов',
            },
          })}
          type="text"
          className="account-form__input"
          id="surname"
        />
      </label>
      <label className="account-form__label" htmlFor="email">
        Email
        <input
          {...register('email', {
            required: 'Поле обязательно к заполнению',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: 'Введите e-mail',
            },
          })}
          type="text"
          className="account-form__input"
          id="email"
        />
      </label>
      <label className="account-form__label" htmlFor="phone">
        Телефон
        <input
          {...register('phone', {
            pattern: {
              value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
              message: 'Введите телефон в формате +7 977 7777 77 77 или +375 29 1237187',
            },
          })}
          type="text"
          className="account-form__input"
          id="phone"
        />
      </label>
      <button className={`account-form__button ${isValid && isDirty ? '' : 'account-form__button_inactive'}`} type="submit">
        Сохранить
        {' '}
      </button>
    </form>
  );
}
