const Joi = require("@hapi/joi"); //validation package

const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().token().min(6),
    repeat_password: Joi.ref("password"),
    adress: Joi.string().min(3),
    name: Joi.string().min(2),
    age: Joi.number().positive(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().token().min(6),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
