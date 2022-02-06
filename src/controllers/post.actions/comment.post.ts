import { Request, Response } from 'express';
import { ProcessingSuccess } from '../../RequestStatus/status';
import models from '../../models';

export default async function CommentPost(
  req: Request,
  res: Response,
) {
  const { postId, comment, user } = req.body;

  const NewComment = new models.Comment({
    user,
    comment,
    post: postId,
  });
  NewComment.save({ validateBeforeSave: true });

  return ProcessingSuccess(res, NewComment.toObject());
}
