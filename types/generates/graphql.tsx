import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  timestamptz: any
  uuid: string
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: 'groups'
  id: Scalars['uuid']
  name: Scalars['String']
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
}

/** columns and relationships of "groups" */
export type GroupsUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "groups" */
export type GroupsUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** aggregated selection of "groups" */
export type Groups_Aggregate = {
  __typename?: 'groups_aggregate'
  aggregate?: Maybe<Groups_Aggregate_Fields>
  nodes: Array<Groups>
}

/** aggregate fields of "groups" */
export type Groups_Aggregate_Fields = {
  __typename?: 'groups_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Groups_Max_Fields>
  min?: Maybe<Groups_Min_Fields>
}

/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Groups_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: Maybe<Array<Groups_Bool_Exp>>
  _not?: Maybe<Groups_Bool_Exp>
  _or?: Maybe<Array<Groups_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  users?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint */
  GroupsPkey = 'groups_pkey',
}

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  users?: Maybe<Users_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: 'groups_max_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: 'groups_min_fields'
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: 'groups_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Groups>
}

/** input type for inserting object relation for remote table "groups" */
export type Groups_Obj_Rel_Insert_Input = {
  data: Groups_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Groups_On_Conflict>
}

/** on conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint
  update_columns: Array<Groups_Update_Column>
  where?: Maybe<Groups_Bool_Exp>
}

/** Ordering options when selecting data from "groups". */
export type Groups_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Aggregate_Order_By>
}

/** primary key columns input for table: groups */
export type Groups_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "groups" */
export type Groups_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>
  /** delete data from the table: "profile_users" */
  delete_profile_users?: Maybe<Profile_Users_Mutation_Response>
  /** delete single row from the table: "profile_users" */
  delete_profile_users_by_pk?: Maybe<Profile_Users>
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>
  /** insert data into the table: "profile_users" */
  insert_profile_users?: Maybe<Profile_Users_Mutation_Response>
  /** insert a single row into the table: "profile_users" */
  insert_profile_users_one?: Maybe<Profile_Users>
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>
  /** update data of the table: "profile_users" */
  update_profile_users?: Maybe<Profile_Users_Mutation_Response>
  /** update single row of the table: "profile_users" */
  update_profile_users_by_pk?: Maybe<Profile_Users>
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
}

/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Profile_UsersArgs = {
  where: Profile_Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Profile_Users_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>
  on_conflict?: Maybe<Groups_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input
  on_conflict?: Maybe<Groups_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Profile_UsersArgs = {
  objects: Array<Profile_Users_Insert_Input>
  on_conflict?: Maybe<Profile_Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Profile_Users_OneArgs = {
  object: Profile_Users_Insert_Input
  on_conflict?: Maybe<Profile_Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>
  on_conflict?: Maybe<Profiles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input
  on_conflict?: Maybe<Profiles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _set?: Maybe<Groups_Set_Input>
  where: Groups_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _set?: Maybe<Groups_Set_Input>
  pk_columns: Groups_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Profile_UsersArgs = {
  _set?: Maybe<Profile_Users_Set_Input>
  where: Profile_Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Profile_Users_By_PkArgs = {
  _set?: Maybe<Profile_Users_Set_Input>
  pk_columns: Profile_Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _set?: Maybe<Profiles_Set_Input>
  where: Profiles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _set?: Maybe<Profiles_Set_Input>
  pk_columns: Profiles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "profile_users" */
export type Profile_Users = {
  __typename?: 'profile_users'
  id: Scalars['uuid']
  /** An object relationship */
  profile: Profiles
  profile_id: Scalars['uuid']
  /** An object relationship */
  user: Users
  user_id: Scalars['uuid']
}

/** aggregated selection of "profile_users" */
export type Profile_Users_Aggregate = {
  __typename?: 'profile_users_aggregate'
  aggregate?: Maybe<Profile_Users_Aggregate_Fields>
  nodes: Array<Profile_Users>
}

/** aggregate fields of "profile_users" */
export type Profile_Users_Aggregate_Fields = {
  __typename?: 'profile_users_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Profile_Users_Max_Fields>
  min?: Maybe<Profile_Users_Min_Fields>
}

/** aggregate fields of "profile_users" */
export type Profile_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profile_Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "profile_users" */
export type Profile_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Profile_Users_Max_Order_By>
  min?: Maybe<Profile_Users_Min_Order_By>
}

/** input type for inserting array relation for remote table "profile_users" */
export type Profile_Users_Arr_Rel_Insert_Input = {
  data: Array<Profile_Users_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Profile_Users_On_Conflict>
}

/** Boolean expression to filter rows from the table "profile_users". All fields are combined with a logical 'AND'. */
export type Profile_Users_Bool_Exp = {
  _and?: Maybe<Array<Profile_Users_Bool_Exp>>
  _not?: Maybe<Profile_Users_Bool_Exp>
  _or?: Maybe<Array<Profile_Users_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  profile?: Maybe<Profiles_Bool_Exp>
  profile_id?: Maybe<Uuid_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "profile_users" */
export enum Profile_Users_Constraint {
  /** unique or primary key constraint */
  ProfileUsersPkey = 'profile_users_pkey',
}

/** input type for inserting data into table "profile_users" */
export type Profile_Users_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  profile?: Maybe<Profiles_Obj_Rel_Insert_Input>
  profile_id?: Maybe<Scalars['uuid']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Profile_Users_Max_Fields = {
  __typename?: 'profile_users_max_fields'
  id?: Maybe<Scalars['uuid']>
  profile_id?: Maybe<Scalars['uuid']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "profile_users" */
export type Profile_Users_Max_Order_By = {
  id?: Maybe<Order_By>
  profile_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Profile_Users_Min_Fields = {
  __typename?: 'profile_users_min_fields'
  id?: Maybe<Scalars['uuid']>
  profile_id?: Maybe<Scalars['uuid']>
  user_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "profile_users" */
export type Profile_Users_Min_Order_By = {
  id?: Maybe<Order_By>
  profile_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "profile_users" */
export type Profile_Users_Mutation_Response = {
  __typename?: 'profile_users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Profile_Users>
}

/** on conflict condition type for table "profile_users" */
export type Profile_Users_On_Conflict = {
  constraint: Profile_Users_Constraint
  update_columns: Array<Profile_Users_Update_Column>
  where?: Maybe<Profile_Users_Bool_Exp>
}

/** Ordering options when selecting data from "profile_users". */
export type Profile_Users_Order_By = {
  id?: Maybe<Order_By>
  profile?: Maybe<Profiles_Order_By>
  profile_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: profile_users */
export type Profile_Users_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "profile_users" */
export enum Profile_Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "profile_users" */
export type Profile_Users_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  profile_id?: Maybe<Scalars['uuid']>
  user_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "profile_users" */
export enum Profile_Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles'
  id: Scalars['uuid']
  nickname: Scalars['String']
  /** fetch data from the table: "profile_users" */
  profile_users: Array<Profile_Users>
  /** An aggregate relationship */
  profile_users_aggregate: Profile_Users_Aggregate
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
}

/** columns and relationships of "profiles" */
export type ProfilesProfile_UsersArgs = {
  distinct_on?: Maybe<Array<Profile_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profile_Users_Order_By>>
  where?: Maybe<Profile_Users_Bool_Exp>
}

/** columns and relationships of "profiles" */
export type ProfilesProfile_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profile_Users_Order_By>>
  where?: Maybe<Profile_Users_Bool_Exp>
}

/** columns and relationships of "profiles" */
export type ProfilesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "profiles" */
export type ProfilesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate'
  aggregate?: Maybe<Profiles_Aggregate_Fields>
  nodes: Array<Profiles>
}

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Profiles_Max_Fields>
  min?: Maybe<Profiles_Min_Fields>
}

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profiles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: Maybe<Array<Profiles_Bool_Exp>>
  _not?: Maybe<Profiles_Bool_Exp>
  _or?: Maybe<Array<Profiles_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  nickname?: Maybe<String_Comparison_Exp>
  profile_users?: Maybe<Profile_Users_Bool_Exp>
  users?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint */
  ProfilesPkey = 'profiles_pkey',
}

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  nickname?: Maybe<Scalars['String']>
  profile_users?: Maybe<Profile_Users_Arr_Rel_Insert_Input>
  users?: Maybe<Users_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields'
  id?: Maybe<Scalars['uuid']>
  nickname?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields'
  id?: Maybe<Scalars['uuid']>
  nickname?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>
}

/** input type for inserting object relation for remote table "profiles" */
export type Profiles_Obj_Rel_Insert_Input = {
  data: Profiles_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Profiles_On_Conflict>
}

/** on conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint
  update_columns: Array<Profiles_Update_Column>
  where?: Maybe<Profiles_Bool_Exp>
}

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  id?: Maybe<Order_By>
  nickname?: Maybe<Order_By>
  profile_users_aggregate?: Maybe<Profile_Users_Aggregate_Order_By>
  users_aggregate?: Maybe<Users_Aggregate_Order_By>
}

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  nickname?: Maybe<Scalars['String']>
}

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "groups" */
  groups: Array<Groups>
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>
  /** fetch data from the table: "profile_users" */
  profile_users: Array<Profile_Users>
  /** An aggregate relationship */
  profile_users_aggregate: Profile_Users_Aggregate
  /** fetch data from the table: "profile_users" using primary key columns */
  profile_users_by_pk?: Maybe<Profile_Users>
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Query_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Groups_Order_By>>
  where?: Maybe<Groups_Bool_Exp>
}

export type Query_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Groups_Order_By>>
  where?: Maybe<Groups_Bool_Exp>
}

export type Query_RootGroups_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootProfile_UsersArgs = {
  distinct_on?: Maybe<Array<Profile_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profile_Users_Order_By>>
  where?: Maybe<Profile_Users_Bool_Exp>
}

export type Query_RootProfile_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profile_Users_Order_By>>
  where?: Maybe<Profile_Users_Bool_Exp>
}

export type Query_RootProfile_Users_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profiles_Order_By>>
  where?: Maybe<Profiles_Bool_Exp>
}

export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profiles_Order_By>>
  where?: Maybe<Profiles_Bool_Exp>
}

export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "groups" */
  groups: Array<Groups>
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>
  /** fetch data from the table: "profile_users" */
  profile_users: Array<Profile_Users>
  /** An aggregate relationship */
  profile_users_aggregate: Profile_Users_Aggregate
  /** fetch data from the table: "profile_users" using primary key columns */
  profile_users_by_pk?: Maybe<Profile_Users>
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Subscription_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Groups_Order_By>>
  where?: Maybe<Groups_Bool_Exp>
}

export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Groups_Order_By>>
  where?: Maybe<Groups_Bool_Exp>
}

export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootProfile_UsersArgs = {
  distinct_on?: Maybe<Array<Profile_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profile_Users_Order_By>>
  where?: Maybe<Profile_Users_Bool_Exp>
}

export type Subscription_RootProfile_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profile_Users_Order_By>>
  where?: Maybe<Profile_Users_Bool_Exp>
}

export type Subscription_RootProfile_Users_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profiles_Order_By>>
  where?: Maybe<Profiles_Bool_Exp>
}

export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profiles_Order_By>>
  where?: Maybe<Profiles_Bool_Exp>
}

export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  created_at: Scalars['timestamptz']
  /** An object relationship */
  group?: Maybe<Groups>
  group_id?: Maybe<Scalars['uuid']>
  id: Scalars['uuid']
  name: Scalars['String']
  /** An object relationship */
  profile?: Maybe<Profiles>
  profile_id?: Maybe<Scalars['uuid']>
  /** fetch data from the table: "profile_users" */
  profile_users: Array<Profile_Users>
  /** An aggregate relationship */
  profile_users_aggregate: Profile_Users_Aggregate
}

/** columns and relationships of "users" */
export type UsersProfile_UsersArgs = {
  distinct_on?: Maybe<Array<Profile_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profile_Users_Order_By>>
  where?: Maybe<Profile_Users_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersProfile_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Profile_Users_Order_By>>
  where?: Maybe<Profile_Users_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_Max_Order_By>
  min?: Maybe<Users_Min_Order_By>
}

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Users_Bool_Exp>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  group?: Maybe<Groups_Bool_Exp>
  group_id?: Maybe<Uuid_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  profile?: Maybe<Profiles_Bool_Exp>
  profile_id?: Maybe<Uuid_Comparison_Exp>
  profile_users?: Maybe<Profile_Users_Bool_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersProfileIdKey = 'users_profile_id_key',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  group?: Maybe<Groups_Obj_Rel_Insert_Input>
  group_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  profile?: Maybe<Profiles_Obj_Rel_Insert_Input>
  profile_id?: Maybe<Scalars['uuid']>
  profile_users?: Maybe<Profile_Users_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  group_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  profile_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>
  group_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  profile_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  group_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  profile_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>
  group_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  profile_id?: Maybe<Order_By>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>
  group?: Maybe<Groups_Order_By>
  group_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  profile?: Maybe<Profiles_Order_By>
  profile_id?: Maybe<Order_By>
  profile_users_aggregate?: Maybe<Profile_Users_Aggregate_Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profile_id',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  group_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  profile_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profile_id',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetUsersQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'id' | 'name' | 'created_at'>
  >
}

export type GetUserIdsQueryVariables = Exact<{ [key: string]: never }>

export type GetUserIdsQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Users, 'id'>>
}

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid']
}>

export type GetUserByIdQuery = { __typename?: 'query_root' } & {
  users_by_pk?: Maybe<
    { __typename?: 'users' } & Pick<Users, 'id' | 'name' | 'created_at'>
  >
}

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']
}>

export type CreateUserMutation = { __typename?: 'mutation_root' } & {
  insert_users_one?: Maybe<
    { __typename?: 'users' } & Pick<Users, 'id' | 'name' | 'created_at'>
  >
}

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['uuid']
}>

export type DeleteUserMutation = { __typename?: 'mutation_root' } & {
  delete_users_by_pk?: Maybe<
    { __typename?: 'users' } & Pick<Users, 'id' | 'name' | 'created_at'>
  >
}

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid']
  name: Scalars['String']
}>

export type UpdateUserMutation = { __typename?: 'mutation_root' } & {
  update_users_by_pk?: Maybe<
    { __typename?: 'users' } & Pick<Users, 'id' | 'name' | 'created_at'>
  >
}

export const GetUsersDocument = gql`
  query GetUsers {
    users(order_by: { created_at: desc }) {
      id
      name
      created_at
    }
  }
`

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  )
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  )
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>
export const GetUserIdsDocument = gql`
  query GetUserIds {
    users(order_by: { created_at: desc }) {
      id
    }
  }
`

/**
 * __useGetUserIdsQuery__
 *
 * To run a query within a React component, call `useGetUserIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserIdsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserIdsQuery,
    GetUserIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserIdsQuery, GetUserIdsQueryVariables>(
    GetUserIdsDocument,
    options
  )
}
export function useGetUserIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserIdsQuery,
    GetUserIdsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserIdsQuery, GetUserIdsQueryVariables>(
    GetUserIdsDocument,
    options
  )
}
export type GetUserIdsQueryHookResult = ReturnType<typeof useGetUserIdsQuery>
export type GetUserIdsLazyQueryHookResult = ReturnType<
  typeof useGetUserIdsLazyQuery
>
export type GetUserIdsQueryResult = Apollo.QueryResult<
  GetUserIdsQuery,
  GetUserIdsQueryVariables
>
export const GetUserByIdDocument = gql`
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  )
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  )
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>
export const CreateUserDocument = gql`
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
      created_at
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  )
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options
  )
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>
export const UpdateUserDocument = gql`
  mutation UpdateUser($id: uuid!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      created_at
    }
  }
`
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  )
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>