import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function DeletePost(
  req: Request,
  res: Response,
) {
  const { postId } = req.params;
  const deletedItem = await models.Post.deleteOne({ _id: postId });
  if (!deletedItem)
    return ResourceNotFound(
      res,
      constants.Validations.POST_NOT_FOUND,
    );
  return ProcessingSuccess(res, {});
}
