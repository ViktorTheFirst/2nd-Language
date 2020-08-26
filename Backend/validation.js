const Joi = require("@hapi/joi"); //validation package
//--------------------------------------------------------------------------------------
const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().token().min(6),
    repeat_password: Joi.ref("password"),
    firstName: Joi.string().min(2),
    lastName: Joi.string().min(2),
    age: Joi.number().positive(),
  });
  return schema.validate(data);
};
//--------------------------------------------------------------------------------------
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email()
      .error(() => {
        // FIND OUT HOW TO EXPORT ERRORS TO END USER AT LOGIN SCREEN
        return { message: "Invalid email" };
      }),
    password: Joi.string()
      .required()
      .token()
      .min(6)
      .error(() => {
        return { message: "Invalid password" };
      }),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
