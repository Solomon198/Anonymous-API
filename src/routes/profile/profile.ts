import { Router } from 'express';
import UpdateProfile from '../../controllers/profile/update.profile';
import GetProfile from '../../controllers/profile/get.profile';
import constants from '../../constants/index';
import HandleAsyncFactory from '../../Middlewares/async.error.handler';
import ValidateAccessToken from '../../Middlewares/check.route.access';

const { PROFILE, GET_PROFILE } = constants.RoutesSubs;
const profile = Router();

profile.put(
  PROFILE,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(UpdateProfile),
);

profile.get(
  GET_PROFILE,
  HandleAsyncFactory(ValidateAccessToken),
  HandleAsyncFactory(GetProfile),
);

export default profile;
