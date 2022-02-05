// ROUTES SUB URLS

// LOGIN
const LOGIN = '/';

// SIGNUP
const SIGNUP = '/';

// TOKEN MANAGEMENT
const TOKEN_MANAGEMENT = '/refresh'; // manage tokens

// VERIFICATION
const VERIFICATION = '/';
const VERIFICATION_CALL = '/call'; // verification
const VERIFICATION_SMS = '/sms'; // verification
const VERIFICATION_CODE = '/code'; // verification

// RESET PASSWORD

// PROFILE
const GET_PROFILE = '/:uid';
const PROFILE = '/';

const RESSET_PASSWORD = '/';

// POST
const GET_POST = '/info/:postId';
const ROOT = '/';
const ROOT_POST_PARAM = '/:postId';

export default {
  ROOT_POST_PARAM,
  ROOT,
  GET_POST,
  PROFILE,
  GET_PROFILE,
  LOGIN,
  SIGNUP,
  TOKEN_MANAGEMENT,
  VERIFICATION,
  VERIFICATION_CALL,
  VERIFICATION_CODE,
  VERIFICATION_SMS,
  RESSET_PASSWORD,
};
