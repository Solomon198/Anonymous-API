/// <reference path="../Types/interfaces.ts"/>
import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { Post } from '../Types/interfaces';

const Posts: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'Users' },
    post: { type: Schema.Types.String },
    likesCount: { type: Schema.Types.Number },
    commentsCount: { type: Schema.Types.Number },
    likers: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
    tag: Schema.Types.String,
  },
  { autoIndex: false },
);

Posts.plugin(mongoosePaginate);
export default model<Post>('Posts', Posts);
