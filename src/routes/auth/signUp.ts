import { Router } from 'express';
import { SignUp } from '../../controllers/auth/signUp';
import { HandleDuplicateSignUpMiddleWare } from '../../Middlewares/signUp';
import ValidateSignUpInput from '../../Validators/auth/signup.user.validator';
import constants from '../../constants/index';
import HandleAsyncFactory from '../../Middlewares/async.error.handler';

const { SIGNUP } = constants.RoutesSubs;
const signUp = Router();

signUp.post(
  SIGNUP,
  HandleAsyncFactory(ValidateSignUpInput),
  HandleAsyncFactory(HandleDuplicateSignUpMiddleWare),
  HandleAsyncFactory(SignUp),
);

export default signUp;
