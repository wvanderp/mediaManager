export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Photo = {
  __typename?: 'Photo';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  camara?: Maybe<Camera>;
};

export type Camera = {
  __typename?: 'Camera';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  photos?: Maybe<Array<Maybe<Photo>>>;
};

