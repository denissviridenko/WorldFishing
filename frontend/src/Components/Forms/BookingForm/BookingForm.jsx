import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import CustomedDatePicker from '../../CustomedDatePicker/CustomedDatePicker';

export default function BookingForm({ onBookingSubmit, isBookingSuccessful }) {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const { register, reset, formState: { isSubmitted } } = methods;
  useEffect(() => {
    reset();
  }, []);

  function onFormSubmit(data) {
    onBookingSubmit({
      country: data.name,
      startDate: data.date.split(' ')[0],
      endDate: data.date.split(' ').at(-1),
      status: 'Предстоящая поездка',
      price: 150000,
    });
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onFormSubmit)} className="booking-form" autoComplete="false" action="post" noValidate>
        <label htmlFor="name" className="booking-form__label">
          <input
            {...register('name', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Минимум 2 символа',
              },
            })}
            className="booking-form__input"
            type="text"
            id="name"
            placeholder="Введите название тура "
          />
          <span className={`booking-form__error-triangle ${methods.formState.errors?.name ? 'booking-form__error-triangle_active' : ''
          }`}
          />
          <span className={`booking-form__error ${methods.formState.errors?.name && 'booking-form__error_active'
          }`}
          >
            {methods.formState.errors?.name?.message}

          </span>
        </label>
        <label htmlFor="date" className="booking-form__label" onClick={(e) => e.preventDefault()}>
          <CustomedDatePicker />
          <span className={`booking-form__error-triangle ${methods.formState.errors?.date ? 'booking-form__error-triangle_active' : ''
          }`}
          />
          <span className={`booking-form__error ${methods.formState.errors?.date && 'booking-form__error_active'
          }`}
          >
            {methods.formState.errors?.date?.message}
          </span>
        </label>
        <label htmlFor="phone" className="booking-form__label">
          <input
            {...register('phone', {
              pattern: {
                value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
                message: 'Введите телефон в формате +7 977 7777 77 77 или +375 29 1237187',
              },
            })}
            className="booking-form__input"
            type="tel"
            id="phone"
            placeholder="Введите номер телефона "
          />
          <span className={`booking-form__error-triangle ${methods.formState.errors?.phone ? 'booking-form__error-triangle_active' : ''
          }`}
          />
          <span className={`booking-form__error ${methods.formState.errors?.phone && 'booking-form__error_active'
          }`}
          >
            {methods.formState.errors?.phone?.message}
          </span>
        </label>
        <span className={`booking-form__submit ${isBookingSuccessful && isSubmitted && 'booking-form__submit_success'}`}>
          Бронирование прошло успешно!
        </span>
        <button
          className="booking-form__button"
          type="submit"
        >
          Забронировать
        </button>
      </form>
    </FormProvider>
  );
}
