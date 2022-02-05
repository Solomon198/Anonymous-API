import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function UpdatePost(
  req: Request,
  res: Response,
) {
  const { postId, updates } = req.body;
  const UpdatedDoc = await models.Post.updateOne(
    { _id: postId },
    updates,
    { new: true },
  );

  if (!UpdatedDoc)
    return ResourceNotFound(
      res,
      constants.Validations.POST_NOT_FOUND,
    );

  return ProcessingSuccess(res, UpdatedDoc);
}
