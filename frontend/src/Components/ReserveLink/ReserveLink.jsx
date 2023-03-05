import { Link } from 'react-router-dom';
import { routeNames } from '../../utils/constants';

export default function ReserveLink() {
  return (
    <Link to={routeNames.booking} className="reserve-button">
      Забронировать тур
    </Link>
  );
}
