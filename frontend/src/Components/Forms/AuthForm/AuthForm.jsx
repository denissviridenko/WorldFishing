import { useState } from 'react';
import { useForm } from 'react-hook-form';
import showPassword from '../../../images/OpenedEye.svg';
import hidePassword from '../../../images/ClosedEye.svg';
import errorImg from '../../../images/Error.svg';

export default function AuthForm({ buttonText, login, onSubmit }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isCheckPasswordShown, setIsCheckPasswordShown] = useState(false);

  const {
    register,
    reset,
    getValues,
    formState: {
      errors, isDirty, dirtyFields,
    },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
  });

  function onFormSubmit(data) {
    if (login) {
      onSubmit(data);
    } else {
      onSubmit(data);
    }
    reset({ keepValues: true });
  }

  function handleShowPassword() {
    setIsPasswordShown(!isPasswordShown);
  }

  function handleShowCheckPassword() {
    setIsCheckPasswordShown(!isCheckPasswordShown);
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="auth-form" method="post" noValidate>
      {!login && (
        <label className="auth-form__label" htmlFor="name">
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
            className={`auth-form__input ${errors?.name && !isDirty && 'auth-form__input_type_error'
            }`}
            id="name"
            type="text"
            placeholder="Имя"
          />
          <img
            className={`auth-form__error-img ${errors?.name && !isDirty && 'auth-form__error-img_active'}`}
            src={errorImg}
            alt="ошибка"
          />
          <span className={`auth-form__error-triangle ${errors?.name ? 'auth-form__error-triangle_active' : ''
          }`}
          />
          <span className={`auth-form__error ${errors?.name && 'auth-form__error_active'
          }`}
          >
            {errors?.name?.message}

          </span>
        </label>
      )}
      <label className="auth-form__label" htmlFor="email">
        <input
          {...register('email', !login && {
            required: 'Поле обязательно к заполнению',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: 'Введите e-mail',
            },
          })}
          type="email"
          className={`auth-form__input ${errors?.email && !isDirty && 'auth-form__input_type_error'
          }`}
          id="email"
          placeholder="E-mail"
        />
        <img
          className={`auth-form__error-img ${errors?.email && !isDirty && 'auth-form__error-img_active'}`}
          src={errorImg}
          alt="ошибка"
        />
        <span className={`auth-form__error-triangle ${errors?.email ? 'auth-form__error-triangle_active' : ''
        }`}
        />
        <span className={`auth-form__error ${errors?.email && 'auth-form__error_active'
        }`}
        >
          {errors?.email?.message}

        </span>
      </label>
      {!login && (
      <label className="auth-form__label" htmlFor="phone">
        <input
          {...register('phone', {
            required: 'Поле обязательно к заполнению',
            pattern: {
              value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
              message: 'Введите телефон в формате +7 977 7777 77 77 или +375 29 1237187',
            },
          })}
          type="tel"
          className={`auth-form__input ${errors?.phone && !isDirty && 'auth-form__input_type_error'
          }`}
          id="phone"
          placeholder="Телефон"
        />
        <img
          className={`auth-form__error-img ${errors?.phone && !isDirty && 'auth-form__error-img_active'}`}
          src={errorImg}
          alt="ошибка"
        />
        <span className={`auth-form__error-triangle ${errors?.phone ? 'auth-form__error-triangle_active' : ''
        }`}
        />
        <span className={`auth-form__error ${errors?.phone && 'auth-form__error_active'
        }`}
        >
          {errors?.phone?.message}
        </span>
      </label>
      )}
      <label className="auth-form__label" htmlFor="password">
        <input
          {...register('password', !login && {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 8,
              message: 'Пароль должен содержать не менее 8-ми символов',
              pattern: {
                value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                message: 'Пароль должен содержать строчные и заглавные буквы',
              },
            },
          })}
          type={isPasswordShown ? 'text' : 'password'}
          className={`auth-form__input ${errors?.password && !isDirty && 'auth-form__input_type_error'
          }`}
          id="password"
          placeholder="Пароль"
        />
        <img
          className={`auth-form__error-img ${errors?.password && !isDirty && 'auth-form__error-img_active'}`}
          src={errorImg}
          alt="ошибка"
        />
        <img
          onClick={handleShowPassword}
          className={`auth-form__show-password ${dirtyFields.password && 'auth-form__show-password_acitve'}`}
          src={isPasswordShown ? hidePassword : showPassword}
          alt={isPasswordShown ? 'Скрыть пароль' : 'Показать пароль'}
        />
        <span className={`auth-form__error-triangle ${errors?.password ? 'auth-form__error-triangle_active' : ''
        }`}
        />
        <span className={`auth-form__error ${errors?.password && 'auth-form__error_active'
        }`}
        >
          {errors?.password?.message}
        </span>
      </label>
      {!login && (
        <label className="auth-form__label" htmlFor="checkPassword">
          <input
            {...register('checkPassword', {
              required: 'Поле обязательно к заполнению',
              validate: (value) => value === getValues('password') || 'Пароли не совпадают',
            })}
            type={isCheckPasswordShown ? 'text' : 'password'}
            className={`auth-form__input ${errors?.checkPassword && !isDirty && 'auth-form__input_type_error'
            }`}
            id="checkPassword"
            placeholder="Подтверждение пароля "
          />
          <img
            className={`auth-form__error-img ${errors?.checkPassword && !isDirty && 'auth-form__error-img_active'}`}
            src={errorImg}
            alt="ошибка"
          />
          <img
            onClick={handleShowCheckPassword}
            className={`auth-form__show-password ${dirtyFields.checkPassword && 'auth-form__show-password_acitve'}`}
            src={isCheckPasswordShown ? hidePassword : showPassword}
            alt={isCheckPasswordShown ? 'Скрыть пароль' : 'Показать пароль'}
          />
          <span className={`auth-form__error-triangle ${errors?.checkPassword ? 'auth-form__error-triangle_active' : ''
          }`}
          />
          <span className={`auth-form__error ${errors?.checkPassword && 'auth-form__error_active'
          }`}
          >
            {errors?.checkPassword?.message}
          </span>
        </label>
      )}

      <button
        className="auth-form__button"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
}
