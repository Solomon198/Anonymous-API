require('dotenv/config');

const {
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
  TWILIO_MESSAGING_SID,
  TWILIO_PHONE_NUMBER,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSENGER_ID,
  APP_ID,
  MEASUREMENT_ID,
  API_KEY,
} = process.env;

export default {
  JWT_SIGN: 'my-secret', // secret for decoding jwts token
  PORT: 8081,
  DB_CONNECTION_STRING: 'mongodb://localhost/anonymous-api',
  JWT_ISSUER: 'https://example.com/example',
  JWT_AUDIENCE: '76rghjklkjh',
  JWT_ALGO: 'RS256',
  APP_TEST_ENDPOINT: 'http://localhost:8081',
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
  TWILIO_MESSAGING_SID,
  TWILIO_PHONE_NUMBER,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSENGER_ID,
  APP_ID,
  API_KEY,
  MEASUREMENT_ID,
};
