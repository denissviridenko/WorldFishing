import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import 'react-datepicker/dist/react-datepicker.css';
import CustomedInput from './CustomedInput';

setDefaultOptions({ locale: ru });

export default function CustomedDatePicker() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const currentDate = new Date();

  return (
    <DatePicker
      wrapperClassName="date-picker__wrapper"
      placeholderText="Дата поездки"
      showPopperArrow={false}
      onChange={(update) => {
        setDateRange(update);
      }}
      dateFormat="yyyy-MM-dd"
      startDate={startDate}
      endDate={endDate}
      customInput={<CustomedInput />}
      minDate={currentDate}
      required
      shouldCloseOnSelect
      selectsRange
    />
  );
}
