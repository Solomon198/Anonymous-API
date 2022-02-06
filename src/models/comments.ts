/// <reference path="../Types/interfaces.ts"/>
import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { Comments } from '../Types/interfaces';

const Comment: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'Users' },
    post: { type: Schema.Types.String, ref: 'Posts' },
    comment: Schema.Types.String,
  },
  { autoIndex: false },
);

Comment.plugin(mongoosePaginate);
export default model<Comments>('Comments', Comment);
