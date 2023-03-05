const { celebrate, Joi, Segments } = require('celebrate');
const { infoTextSchema } = require('./general');

const passwordSchema = Joi.string().required();
const emailSchema = Joi.string().email();
const phoneSchema = Joi.string().regex(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/);

const signUpSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: infoTextSchema.min(2),
    email: emailSchema.required(),
    phone: phoneSchema,
    password: passwordSchema,
  }),
});

const signInSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: emailSchema.required(),
    password: passwordSchema,
  }),
});

const changeProfileSchema = celebrate({
  body: Joi.object().keys({
    name: infoTextSchema.min(2),
    email: emailSchema.required(),
    phone: phoneSchema,
    surname: infoTextSchema,
  }),
});

module.exports = {
  signUpSchema, signInSchema, changeProfileSchema, emailSchema, passwordSchema, phoneSchema,
};
