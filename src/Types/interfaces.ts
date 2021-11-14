import { Document } from 'mongoose';

type photo = {
  thumbnail: string;
  url: string;
};

export type SignUpProps = {
  firstName: string;

  lastName: string;

  phoneNumber: string;

  sex: 'male' | 'female';

  password: string;

  countryCode: string;
};

export type loginProps = {
  phoneNumber: string;

  password: string;

  countryCode: string;
};

export interface UserProps extends Document {
  userId: string;

  userName: string;

  phoneNumber: string;

  localPhoneNumber: string;

  sex: 'male' | 'female';

  showPhoneNumber: boolean;

  avatar: photo;

  hash: string;

  isVerified: boolean;
  salt: string;

  loginAttempts: number;
  attemptsDuration: any;
  tillUnlocked: any;

  /* eslint-disable */
  setPassword: (pwd: string) => void;
  setSex: (sex: string) => void;
  validatePassword: (pwd: string) => boolean;
  isAccountLocked: () => boolean;
  lockAccount: () => void;
  /* eslint-enable */
}
