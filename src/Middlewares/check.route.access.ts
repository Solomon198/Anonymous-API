import { NextFunction, Request, Response } from 'express';
import { UnAuthorized } from '../RequestStatus/status';
import { decodeJwtToken } from '../utills/utills';
import { UserProps } from '../Types/interfaces';

export default async function ValidateAccessToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;
  const accessToken = authorization?.split(' ')[1];
  try {
    const user = decodeJwtToken(accessToken as any) as UserProps; // throws error if not valid
    res.locals.userId = (user.userId as any).userId;

    next();
  } catch (e) {
    return UnAuthorized(res);
  }
}
