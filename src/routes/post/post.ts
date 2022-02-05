import { Router } from 'express';
import PostControllers from '../../controllers/post/index';
import constants from '../../constants/index';
import HandleAsyncFactory from '../../Middlewares/async.error.handler';
import ValidateAccessToken from '../../Middlewares/check.route.access';

const { GET_POST, ROOT, ROOT_POST_PARAM } = constants.RoutesSubs;
const post = Router();

post.post(
  ROOT,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostControllers.CreatePost),
);

post.put(
  ROOT,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostControllers.UpdatePost),
);

post.delete(
  ROOT_POST_PARAM,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostControllers.DeletePost),
);

post.get(
  GET_POST,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostControllers.GetPost),
);

post.get(
  ROOT,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostControllers.GetAllUsersPost),
);

export default post;
