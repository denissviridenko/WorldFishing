import React, { forwardRef, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const CustomedInput = forwardRef(({
  value, onClick, onChange, placeholder,
}, ref) => {
  const { register, setValue } = useFormContext();
  useEffect(() => {
    setValue('date', value);
  }, [value]);

  return (
    <input
      {...register('date', {
        required: 'Поле обязательно к заполнению',
      })}
      value={value}
      className="react-datepicker___custom-input booking-form__input"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      placeholder={placeholder}
      id="date"
      type="text"
      autoComplete="off"
    />
  );
});

export default CustomedInput;
