import { Router } from 'express';
import { RefreshAccessToken } from '../../controllers/auth/tokenManagement';
import constants from '../../constants/index';
import ValidateRequestToken from '../../Validators/auth/token.request.validators';
import HandleAsyncFactory from '../../Middlewares/async.error.handler';

const { TOKEN_MANAGEMENT } = constants.RoutesSubs;
const token = Router();

token.post(
  TOKEN_MANAGEMENT,
  HandleAsyncFactory(ValidateRequestToken),
  HandleAsyncFactory(RefreshAccessToken),
);

export default token;
