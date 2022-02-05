import * as joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { InvalidInputs } from '../../RequestStatus/status';

const requestBodySchema = joi.object({
  postId: joi.string().required(),
});

export default function ValidateDeletePost(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { error } = requestBodySchema.validate(req.params, {
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
