import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function EditComment(
  req: Request,
  res: Response,
) {
  const { postId, comment } = req.body;

  const UpdateComment = await models.Comment.updateOne(
    { post: postId },
    {
      comment,
    },
    { new: true },
  );

  if (!UpdateComment)
    return ResourceNotFound(
      res,
      constants.Validations.COMMENT_NOT_FOUND,
    );
  return ProcessingSuccess(res, UpdateComment);
}
