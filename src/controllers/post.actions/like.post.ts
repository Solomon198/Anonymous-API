import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceAlreadyExist,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function LikePost(req: Request, res: Response) {
  const uid = res.locals.userId;
  const { postId } = req.params;

  const checkLikeStatus = await models.Post.findOne({
    _id: postId,
    likers: { $in: [uid] },
  });

  if (checkLikeStatus) {
    return ResourceAlreadyExist(
      res,
      constants.Validations.LIKE_ALREADY_EXIST,
    );
  }

  const likePost = await models.Post.updateOne(
    { _id: postId },
    { $push: { likers: uid }, $inc: { likesCount: 1 } },
    { new: true },
  );

  return ProcessingSuccess(res, likePost);
}
