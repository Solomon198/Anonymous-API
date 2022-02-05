import { Request, Response } from 'express';
import {
  ProcessingSuccess,
  ResourceNotFound,
} from '../../RequestStatus/status';
import models from '../../models';
import constants from '../../constants';

export default async function GetPost(req: Request, res: Response) {
  const { postId } = req.params;
  const post = await models.Post.findOne({ _id: postId });
  if (!post)
    return ResourceNotFound(
      res,
      constants.Validations.POST_NOT_FOUND,
    );
  return ProcessingSuccess(res, post);
}

export async function GetAllUsersPost(req: Request, res: Response) {
  const { docs, totalDocs, hasNextPage } = (
    (await models.Post) as any
  ).paginate(
    { user: res.locals.userId },
    {
      ...req.query,
      sort: { _id: -1 }, // eslint-disable-line
    },
  );

  return ProcessingSuccess(res, {
    posts: docs,
    totalPosts: totalDocs,
    hasNextPage,
  });
}
