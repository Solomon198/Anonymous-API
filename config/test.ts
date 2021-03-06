require('dotenv/config');

const {
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
  TWILIO_MESSAGING_SID,
  TWILIO_PHONE_NUMBER,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSENGER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = process.env;

export default {
  JWT_SIGN: 'my-secret', // secret for decoding jwts token
  PAYSTACK_SECRET: '', // signup to paystack !!
  PORT: 8081,
  DB_CONNECTION_STRING: 'mongodb://localhost/hanwok-auth-service',
  JWT_ISSUER: 'https://example.com/example',
  JWT_AUDIENCE: '76rghjklkjh',
  JWT_ALGO: 'RS256',
  APP_TEST_ENDPOINT: 'http://localhost:8081',
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
  TWILIO_MESSAGING_SID,
  TWILIO_PHONE_NUMBER,

  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSENGER_ID,
  APP_ID,
  MEASUREMENT_ID,
};
