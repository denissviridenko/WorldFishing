import arrow from '../../images/profile/arrow-show-more.svg';

export default function MyBookingsItem({ booking }) {
  const startDate = new Date(booking.startDate);
  const endDate = new Date(booking.endDate);
  const createdAt = new Date(booking.createdAt);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedStartDate = startDate.toLocaleDateString('ru-RU', options);
  const formattedEndDate = endDate.toLocaleDateString('ru-RU', options);
  const formattedCreatedAt = createdAt.toLocaleDateString('ru-RU', options);

  return (
    <div className="my-bookings-item">
      <div className="my-bookings-item__header">
        <span className="my-bookings-item__number">{`№ ${booking._id}`}</span>
        <span className="my-bookings-item__date">{`Дата бронирования: ${formattedCreatedAt} `}</span>
        <button className="my-bookings-item__button" type="button">
          Подробнее
          {' '}
          <div className="my-bookings-item__button-img" style={{ backgroundImage: `url(${arrow})` }} />
        </button>
      </div>
      <div className="my-bookings-item__main">
        <span className="my-bookings-item__span">{booking.country}</span>
        <div className="my-bookings-item__span">
          <span>Даты поездки</span>
          <span>{`${formattedStartDate} - ${formattedEndDate}`}</span>
        </div>
        <div className="my-bookings-item__span">
          <span>Статус</span>
          <span>{booking.status}</span>
        </div>
        <span className="my-bookings-item__span">{booking.price}</span>
      </div>
    </div>
  );
}
