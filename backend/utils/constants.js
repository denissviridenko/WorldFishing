module.exports.allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
];

module.exports.allowedHeaders = [
  'Content-Type', 'Authorization',
];

module.exports.errorMessages = {
  emailIsTaken: 'Пользователь с таким email уже зарегистрирован',
  authRequired: 'Требуется авторизация',
  emailRequired: 'Email должен быть вида a@b.cs',
  wrongPasswordOrEmail: 'Неправильные почта или пароль',
  userNotFound: 'Пользователя с указанным id не существует',
  validationFailed: 'Переданы некорректные данные',
  tooMuchRequests: 'Слишком много запросов',
  serverError: 'На сервере произошла ошибка',
  phoneValidation: 'Номер телефона должен быть в формате +7 977 7777 77 77 или +375 29 1237187',
  bookingValidationFailure: 'Некорректные данные при добавлении бронирования',
  urlRequired: 'должен быть в формате URL',
};
