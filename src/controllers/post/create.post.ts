import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function CreatePost(
  req: Request,
  res: Response,
) {
  const uid = res.locals.userId;
  const postData = req.body;
  const NewPost = new models.Post({ ...postData, user: uid });
  NewPost.save({ validateBeforeSave: true });

  return ProcessingSuccess(res, NewPost.toObject());
}
