import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
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
  contactNumber: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: InputMaybe<UserRole>;
};

export type Me = {
  __typename?: 'Me';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  imageUrl: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addReview: Review;
  createService: Service;
  createUser: User;
  deleteService: Maybe<Scalars['Boolean']['output']>;
  login: User;
  logout: Scalars['Boolean']['output'];
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
  getAllServices: Maybe<Array<Maybe<Service>>>;
  getAllUsers: Maybe<Array<Maybe<User>>>;
  getBookingsByUser: Maybe<Array<Maybe<Booking>>>;
  getReview: Maybe<Review>;
  getServiceById: Maybe<Service>;
  getServiceReviews: Maybe<Array<Maybe<Review>>>;
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
  idToken: InputMaybe<Scalars['String']['input']>;
};

export type Review = {
  __typename?: 'Review';
  agentId: Scalars['ID']['output'];
  bookingId: Scalars['ID']['output'];
  comment: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Date']['output']>;
  patronId: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Maybe<Scalars['Date']['output']>;
};

export type ReviewInput = {
  agentId: Scalars['ID']['input'];
  bookingId: Scalars['ID']['input'];
  comment: InputMaybe<Scalars['String']['input']>;
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
  images: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  location: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  ratings: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ServiceInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  bio: Maybe<Scalars['String']['output']>;
  contactNumber: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  imageUrl: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  password: Maybe<Scalars['String']['output']>;
  pronouns: Maybe<Scalars['String']['output']>;
  rating: Maybe<Scalars['Float']['output']>;
  role: UserRole;
  title: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['Date']['output']>;
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


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', _id: string, email: string, firstName: string, lastName: string, role: UserRole, imageUrl: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Me', _id: string, email: string, firstName: string, lastName: string, role: string, imageUrl: string | null } };

export type Google_AuthQueryVariables = Exact<{
  idToken: InputMaybe<Scalars['String']['input']>;
}>;


export type Google_AuthQuery = { __typename?: 'Query', googleAuth: { __typename?: 'User', _id: string, email: string, firstName: string, lastName: string, role: UserRole, imageUrl: string | null } };

export type Create_UserMutationVariables = Exact<{
  userInput: CreateUserInput;
}>;


export type Create_UserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, email: string, firstName: string, lastName: string, role: UserRole, imageUrl: string | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };


export const LoginDocument = gql`
    mutation LOGIN($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    _id
    email
    firstName
    lastName
    role
    imageUrl
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query ME {
  me {
    _id
    email
    firstName
    lastName
    role
    imageUrl
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const Google_AuthDocument = gql`
    query GOOGLE_AUTH($idToken: String) {
  googleAuth(idToken: $idToken) {
    _id
    email
    firstName
    lastName
    role
    imageUrl
  }
}
    `;

/**
 * __useGoogle_AuthQuery__
 *
 * To run a query within a React component, call `useGoogle_AuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoogle_AuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoogle_AuthQuery({
 *   variables: {
 *      idToken: // value for 'idToken'
 *   },
 * });
 */
export function useGoogle_AuthQuery(baseOptions?: Apollo.QueryHookOptions<Google_AuthQuery, Google_AuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Google_AuthQuery, Google_AuthQueryVariables>(Google_AuthDocument, options);
      }
export function useGoogle_AuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Google_AuthQuery, Google_AuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Google_AuthQuery, Google_AuthQueryVariables>(Google_AuthDocument, options);
        }
export function useGoogle_AuthSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Google_AuthQuery, Google_AuthQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Google_AuthQuery, Google_AuthQueryVariables>(Google_AuthDocument, options);
        }
export type Google_AuthQueryHookResult = ReturnType<typeof useGoogle_AuthQuery>;
export type Google_AuthLazyQueryHookResult = ReturnType<typeof useGoogle_AuthLazyQuery>;
export type Google_AuthSuspenseQueryHookResult = ReturnType<typeof useGoogle_AuthSuspenseQuery>;
export type Google_AuthQueryResult = Apollo.QueryResult<Google_AuthQuery, Google_AuthQueryVariables>;
export const Create_UserDocument = gql`
    mutation CREATE_USER($userInput: CreateUserInput!) {
  createUser(userInput: $userInput) {
    _id
    email
    firstName
    lastName
    role
    imageUrl
  }
}
    `;
export type Create_UserMutationFn = Apollo.MutationFunction<Create_UserMutation, Create_UserMutationVariables>;

/**
 * __useCreate_UserMutation__
 *
 * To run a mutation, you first call `useCreate_UserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_UserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreate_UserMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useCreate_UserMutation(baseOptions?: Apollo.MutationHookOptions<Create_UserMutation, Create_UserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_UserMutation, Create_UserMutationVariables>(Create_UserDocument, options);
      }
export type Create_UserMutationHookResult = ReturnType<typeof useCreate_UserMutation>;
export type Create_UserMutationResult = Apollo.MutationResult<Create_UserMutation>;
export type Create_UserMutationOptions = Apollo.BaseMutationOptions<Create_UserMutation, Create_UserMutationVariables>;
export const LogoutDocument = gql`
    mutation LOGOUT {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;