import BookingForm from '../Forms/BookingForm/BookingForm';

export default function Booking({ onBookingSubmit, isBookingSuccessful }) {
  return (
    <section className="booking">
      <h2 className="booking__title">Бронирование тура</h2>
      <BookingForm onBookingSubmit={onBookingSubmit} isBookingSuccessful={isBookingSuccessful} />
    </section>
  );
}
