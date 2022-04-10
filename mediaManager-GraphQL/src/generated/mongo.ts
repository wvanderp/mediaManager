import { ObjectID } from 'mongodb';
import { Camera, Maybe } from './graphql';

export type PhotoDbObject = {
  _id?: Maybe<ObjectID>,
  name?: Maybe<string>,
  date?: Maybe<string>,
  camara?: Maybe<Camera>,
};

export type CameraDbObject = {
  _id?: Maybe<ObjectID>,
  name?: Maybe<string>,
};
