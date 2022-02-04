/// <reference path="../Types/interfaces.ts"/>
import { Schema, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import moment from 'moment';
import Constants from '../constants/index';
import { UserProps } from '../Types/interfaces';

const Users: Schema = new Schema(
  {
    userId: Schema.Types.String,

    userName: Schema.Types.String,

    phoneNumber: Schema.Types.String,

    localPhoneNumber: Schema.Types.String,

    sex: {
      type: Schema.Types.String,
      enum: ['male', 'female'],
      required: true,
    },

    showPhoneNumber: {
      type: Schema.Types.Boolean,
      default: true,
    },

    avatar: Schema.Types.String,

    hash: Schema.Types.String,

    isVerified: {
      type: Boolean,
      default: false,
    },
    salt: Schema.Types.String,

    loginAttempts: { type: Schema.Types.Number, default: 0 },
    attemptsDuration: { type: Schema.Types.Date },
    tillUnlocked: { type: Schema.Types.Date },
  },
  { autoIndex: false },
);

Users.methods.setPassword = function setPassword(password) {
  const documents = this as UserProps;
  documents.salt = bcrypt.genSaltSync(10);
  documents.hash = bcrypt.hashSync(password, documents.salt);
};

Users.methods.isAccountLocked = function isAccountLocked() {
  const documents = this as UserProps;

  if (documents.tillUnlocked) {
    const now = new Date();
    if (documents.tillUnlocked > now) {
      return true;
    }
    return false;
  }
  return false;
};

Users.methods.lockAccount = async function lockAccount() {
  const documents = this as UserProps;

  const now = new Date();
  if (documents.attemptsDuration > now) {
    documents.loginAttempts += 1;
    if (documents.loginAttempts >= Constants.Timers.LOGIN_ATTEMPTS) {
      documents.tillUnlocked = moment(new Date()).add(
        Constants.Timers.UNITLL_UNBLOCK_DURATION,
        'minutes',
      );
    }
  } else {
    documents.attemptsDuration = moment(new Date()).add(
      Constants.Timers.DURATION_TO_FAIL_ATTEMPTS,
      'minutes',
    );
    documents.loginAttempts = 1;
  }

  await documents.save();
};

Users.methods.validatePassword = function validatePassword(password) {
  const documents = this as UserProps;
  const hash = bcrypt.compareSync(password, documents.hash);
  return hash;
};

Users.methods.setSex = function setSex(sex: string) {
  const doc = this as UserProps;

  if (sex === 'male' || sex === 'female') {
    doc.sex = sex;
  } else {
    throw new Error('Invalid Gender');
  }
};

export default model<UserProps>('Users', Users);
