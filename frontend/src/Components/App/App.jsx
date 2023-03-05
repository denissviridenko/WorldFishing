import {
  Switch, Route, useHistory,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { CurrentUserContext } from '../CurrentUserContext';
import Header from '../Header/Header';
import NavigationAuth from '../NavigationAuth/NavigationAuth';
import Navigation from '../Navigation/Navigation';
import Silder from '../Slider/Slider';
import InfoSpanSection from '../InfoSpan/InfoSpanSection';
import Catalog from '../Catalog/Catalog';
import Info from '../Info/Info';
import Partners from '../Partners/Partners';
import Questions from '../Questions/Questions';
import Footer from '../Footer/Footer';
import Country from '../Country/Country';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { routeNames } from '../../utils/constants';
import Booking from '../Booking/Booking';
import Profile from '../Profile/Profile';
import MyBookings from '../MyBookings/MyBookings';
import { registerApi, loginApi } from '../../utils/Auth';
import Api from '../../utils/Api';

function App() {
  const history = useHistory();
  const jwt = localStorage.getItem('jwt');
  const [currentUser, setCurrentUser] = useState({ jwt });
  const [loggedIn, setLoggedIn] = useState(currentUser.jwt && true);
  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
  const [tours, setTours] = useState([]);

  const api = new Api(jwt);

  useEffect(() => {
    api.getToursInfo()
      .then((res) => setTours(res))
      .catch((err) => {
        console.log(err);
      });
    if (jwt) {
      api.getProfileInfo()
        .then((res) => {
          setCurrentUser({ ...currentUser, ...res });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [jwt]);

  function handleLogin(data) {
    loginApi(data.email, data.password)
      .then((res) => res.json())
      .then((res) => {
        if (!res.token) {
          throw new Error('Missing jwt');
        }
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        history.push(routeNames.main);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister(data) {
    registerApi(data.name, data.email, data.phone, data.password)
      .then((res) => {
        if (res.status === 200) {
          history.push(routeNames.login);
        }
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleProfileChange(data) {
    api.changeProfileInfo(data)
      .then((res) => {
        setCurrentUser({
          ...currentUser, name: res.name, email: res.email, phone: res.phone, surname: res.surname,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.clear();
    history.push(routeNames.main);
  }

  function handleBooking(data) {
    api.postBooking(data)
      .then((res) => {
        if (res.status === 200) {
          setIsBookingSuccessful(true);
        } else res.json();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="App">
        <NavigationAuth loggedIn={loggedIn} />
        <Header />
        <Navigation loggedIn={loggedIn} tours={tours} />
        <Switch>
          <Route exact path={routeNames.main}>
            <Silder />
            <InfoSpanSection />
            <Catalog />
            <Info />
            <Partners />
            <Questions />
          </Route>
          <Route exact path={routeNames.login}>
            <Login onSubmit={handleLogin} />
          </Route>
          <Route exact path={routeNames.register}>
            <Register onSubmit={handleRegister} />
          </Route>
          {tours.map((tour) => (
            <Route exact path={`/${tour.countryEng}`} key={uuid()}>
              <Country tour={tour} />
            </Route>
          ))}

          <Route exact path={routeNames.booking}>
            <Booking onBookingSubmit={handleBooking} isBookingSuccessful={isBookingSuccessful} />
          </Route>
          <Route exact path={routeNames.profile}>
            <Profile onProfileChange={handleProfileChange} onLogout={handleLogout} />
          </Route>
          <Route exact path={routeNames.myBookings}>
            <MyBookings />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
