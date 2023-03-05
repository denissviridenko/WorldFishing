import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import MyBookingsItem from './MyBookingsItem';
import Api from '../../utils/Api';

export default function MyBookings() {
  const jwt = localStorage.getItem('jwt');
  const api = new Api(jwt);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.getBookingsInfo()
      .then((res) => setBookings(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="my-bookings">
      <h2 className="my-bookings__title">Мои бронирования</h2>
      {bookings.length !== 0 && bookings.map((booking) => (<MyBookingsItem key={uuid()} booking={booking} />))}
    </div>
  );
}
