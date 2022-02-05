import { Request, Response } from 'express';
import { Types } from 'mongoose';
import {
  ProcessingSuccess,
  UserDoesNotExist,
} from '../../RequestStatus/status';
import models from '../../models';
import { UserProps } from '../../Types/interfaces';

export default async function UpdateUserProfile(
  req: Request,
  res: Response,
) {
  const updates = req.body as UserProps;

  const $UID = new Types.ObjectId(res.locals.userId);
  const $user = await models.Users.findByIdAndUpdate($UID, updates);

  if (!$user) return UserDoesNotExist(res);

  return ProcessingSuccess(res, $user);
}
