import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../../RequestStatus/status';

const requestBodySchema = joi.object({
  pageNumber: joi.number().required(),
  pageSize: joi.number().required(),
});

export default function ValidateDeletePost(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { error } = requestBodySchema.validate(req.query, {
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
