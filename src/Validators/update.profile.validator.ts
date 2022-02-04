import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../RequestStatus/status';

const requestBodySchema = joi.object({
  userId: joi.string().required().label('User ID'),

  updates: joi.object({
    userName: joi.string(),
    avatar: joi.string(),
  }),
});

export default function ValidateUpdateUser(
  req: Request,
  res: Response,
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
    console.log(error);
    return InvalidInputs(res, error.message);
  }
  next();
}
