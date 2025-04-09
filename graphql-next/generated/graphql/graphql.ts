/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type Booking = {
  __typename?: 'Booking';
  agentId: Scalars['ID']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  patronId: Scalars['ID']['output'];
  serviceId: Scalars['ID']['output'];
  status: Scalars['String']['output'];
};

export type BookingInput = {
  date: Scalars['String']['input'];
  serviceId: Scalars['ID']['input'];
};

export enum BookingStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type CreateUserInput = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
};

export type Me = {
  __typename?: 'Me';
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addReview: Review;
  createService: Service;
  createUser: User;
  deleteService?: Maybe<Scalars['Boolean']['output']>;
  login: User;
  requestBooking: Booking;
  updateBookingStatus: Booking;
};

export type MutationAddReviewArgs = {
  reviewInput: ReviewInput;
};

export type MutationCreateServiceArgs = {
  serviceInput: ServiceInput;
};

export type MutationCreateUserArgs = {
  userInput: CreateUserInput;
};

export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
};

export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationRequestBookingArgs = {
  bookingInput: BookingInput;
};

export type MutationUpdateBookingStatusArgs = {
  id: Scalars['ID']['input'];
  status: BookingStatus;
};

export type Query = {
  __typename?: 'Query';
  getAllServices?: Maybe<Array<Maybe<Service>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getBookingsByUser?: Maybe<Array<Maybe<Booking>>>;
  getReview?: Maybe<Review>;
  getServiceById?: Maybe<Service>;
  getServiceReviews?: Maybe<Array<Maybe<Review>>>;
  getUser: User;
  googleAuth: User;
  me: Me;
};

export type QueryGetReviewArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetServiceByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetServiceReviewsArgs = {
  serviceId: Scalars['ID']['input'];
};

export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGoogleAuthArgs = {
  idToken?: InputMaybe<Scalars['String']['input']>;
};

export type Review = {
  __typename?: 'Review';
  agentId: Scalars['ID']['output'];
  bookingId: Scalars['ID']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  patronId: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ReviewInput = {
  agentId: Scalars['ID']['input'];
  bookingId: Scalars['ID']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  patronId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
};

export type Service = {
  __typename?: 'Service';
  agentId: Scalars['ID']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  location: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  ratings?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ServiceInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  role: UserRole;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Agent = 'AGENT',
  Patron = 'PATRON'
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'User'; _id: string; email: string; firstName: string; lastName: string };
};

export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LOGIN' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type Booking = {
  __typename?: 'Booking';
  agentId: Scalars['ID']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  patronId: Scalars['ID']['output'];
  serviceId: Scalars['ID']['output'];
  status: Scalars['String']['output'];
};

export type BookingInput = {
  date: Scalars['String']['input'];
  serviceId: Scalars['ID']['input'];
};

export enum BookingStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type CreateUserInput = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
};

export type Me = {
  __typename?: 'Me';
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addReview: Review;
  createService: Service;
  createUser: User;
  deleteService?: Maybe<Scalars['Boolean']['output']>;
  login: User;
  requestBooking: Booking;
  updateBookingStatus: Booking;
};

export type MutationAddReviewArgs = {
  reviewInput: ReviewInput;
};

export type MutationCreateServiceArgs = {
  serviceInput: ServiceInput;
};

export type MutationCreateUserArgs = {
  userInput: CreateUserInput;
};

export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
};

export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationRequestBookingArgs = {
  bookingInput: BookingInput;
};

export type MutationUpdateBookingStatusArgs = {
  id: Scalars['ID']['input'];
  status: BookingStatus;
};

export type Query = {
  __typename?: 'Query';
  getAllServices?: Maybe<Array<Maybe<Service>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getBookingsByUser?: Maybe<Array<Maybe<Booking>>>;
  getReview?: Maybe<Review>;
  getServiceById?: Maybe<Service>;
  getServiceReviews?: Maybe<Array<Maybe<Review>>>;
  getUser: User;
  googleAuth: User;
  me: Me;
};

export type QueryGetReviewArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetServiceByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetServiceReviewsArgs = {
  serviceId: Scalars['ID']['input'];
};

export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGoogleAuthArgs = {
  idToken?: InputMaybe<Scalars['String']['input']>;
};

export type Review = {
  __typename?: 'Review';
  agentId: Scalars['ID']['output'];
  bookingId: Scalars['ID']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  patronId: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ReviewInput = {
  agentId: Scalars['ID']['input'];
  bookingId: Scalars['ID']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  patronId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
};

export type Service = {
  __typename?: 'Service';
  agentId: Scalars['ID']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  location: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  ratings?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ServiceInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  role: UserRole;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Agent = 'AGENT',
  Patron = 'PATRON'
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'User'; _id: string; email: string; firstName: string; lastName: string };
};
