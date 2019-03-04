import Joi from 'joi';

export default {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    };

    const {error, value} = Joi.validate(req.body, schema);

    if(error) {
      switch(error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid email adress'
          });
          break;
        case 'password':
          res.status(400).send({
            error: `Provided password should match rules: 
                    <br/>
                    1. It must contain only the following characters: lower case, upper case, numerics.
                    <br/>
                    2. It must be at least 8-32 characters length.`
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid information'
          });
      }
    }

    next();
  }
};
