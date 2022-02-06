import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function DeleteComment(
  req: Request,
  res: Response,
) {
  const { postId } = req.params;

  const deleteComment = await models.Comment.deleteOne({
    post: postId,
  });

  if (!deleteComment)
    return ResourceNotFound(
      res,
      constants.Validations.COMMENT_NOT_FOUND,
    );
  return ProcessingSuccess(res, deleteComment);
}
