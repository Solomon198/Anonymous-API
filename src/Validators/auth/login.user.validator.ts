import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../../RequestStatus/status';

const requestBodySchema = joi.object({
  phoneNumber: joi.string().required().min(8).label('Phone number'),
  countryCode: joi
    .string()
    .length(2)
    .required()
    .label('Country code'),
  password: joi.string().min(7).required().label('Password'),
});

export default function ValidateLoginMiddleWare(
  req: Request,
  res: Response, // eslint-disable-line
  next: NextFunction,
) {
  const { error } = requestBodySchema.validate(req.body, {
    errors: {
      wrap: {
        label: '',
      },
    },
  });
  if (error) {
    return InvalidInputs(res, error.message);
  }
  next();
}
