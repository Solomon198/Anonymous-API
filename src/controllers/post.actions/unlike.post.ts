import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function UnLikePost(
  req: Request,
  res: Response,
) {
  const uid = res.locals.userId;
  const { postId } = req.params;

  const checkLikeStatus = await models.Post.findOne({
    _id: postId,
    likers: { $in: [uid] },
  });

  if (!checkLikeStatus) {
    return ResourceNotFound(
      res,
      constants.Validations.LIKE_NOT_FOUND,
    );
  }

  const likePost = await models.Post.updateOne(
    { _id: postId },
    { $pull: { likers: uid }, $inc: { likesCount: -1 } },
    { new: true },
  );

  return ProcessingSuccess(res, likePost);
}
