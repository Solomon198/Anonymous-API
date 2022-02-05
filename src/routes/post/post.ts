import { Router } from 'express';
import PostControllers from '../../controllers/post/index';
import constants from '../../constants/index';
import HandleAsyncFactory from '../../Middlewares/async.error.handler';
import ValidateAccessToken from '../../Middlewares/check.route.access';
import PostValidators from '../../Validators/post/index';

const { GET_POST, ROOT, ROOT_POST_PARAM } = constants.RoutesSubs;
const post = Router();

post.post(
  ROOT,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostValidators.CreatePostValidator),
  HandleAsyncFactory(PostControllers.CreatePost),
);

post.put(
  ROOT,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostValidators.UpdateValidator),
  HandleAsyncFactory(PostControllers.UpdatePost),
);

post.delete(
  ROOT_POST_PARAM,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostValidators.ValidatePostId),
  HandleAsyncFactory(PostControllers.DeletePost),
);

post.get(
  GET_POST,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostValidators.ValidatePostId),
  HandleAsyncFactory(PostControllers.GetPost),
);

post.get(
  ROOT,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(PostControllers.GetAllUsersPost),
);

export default post;
