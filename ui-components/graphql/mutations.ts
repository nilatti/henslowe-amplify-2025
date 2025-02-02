/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTheaters = /* GraphQL */ `
  mutation CreateTheaters(
    $condition: ModelTheatersConditionInput
    $input: CreateTheatersInput!
  ) {
    createTheaters(condition: $condition, input: $input) {
      calendar_url
      city
      created_at
      fake
      id
      logo
      mission_statement
      name
      phone_number
      state
      street_address
      updated_at
      website
      zip
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $condition: ModelUsersConditionInput
    $input: CreateUsersInput!
  ) {
    createUsers(condition: $condition, input: $input) {
      bio
      birthdate
      city
      created_at
      description
      email
      emergency_contact_name
      emergency_contact_number
      fake
      first_name
      gender
      id
      last_name
      middle_name
      phone_number
      preferred_name
      program_name
      role
      state
      street_address
      stripe_customer_id
      stripe_subscription_id
      subscription_end_date
      subscription_status
      timezone
      uid
      updated_at
      website
      zip
      __typename
    }
  }
`;
export const deleteTheaters = /* GraphQL */ `
  mutation DeleteTheaters(
    $condition: ModelTheatersConditionInput
    $input: DeleteTheatersInput!
  ) {
    deleteTheaters(condition: $condition, input: $input) {
      calendar_url
      city
      created_at
      fake
      id
      logo
      mission_statement
      name
      phone_number
      state
      street_address
      updated_at
      website
      zip
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $condition: ModelUsersConditionInput
    $input: DeleteUsersInput!
  ) {
    deleteUsers(condition: $condition, input: $input) {
      bio
      birthdate
      city
      created_at
      description
      email
      emergency_contact_name
      emergency_contact_number
      fake
      first_name
      gender
      id
      last_name
      middle_name
      phone_number
      preferred_name
      program_name
      role
      state
      street_address
      stripe_customer_id
      stripe_subscription_id
      subscription_end_date
      subscription_status
      timezone
      uid
      updated_at
      website
      zip
      __typename
    }
  }
`;
export const updateTheaters = /* GraphQL */ `
  mutation UpdateTheaters(
    $condition: ModelTheatersConditionInput
    $input: UpdateTheatersInput!
  ) {
    updateTheaters(condition: $condition, input: $input) {
      calendar_url
      city
      created_at
      fake
      id
      logo
      mission_statement
      name
      phone_number
      state
      street_address
      updated_at
      website
      zip
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $condition: ModelUsersConditionInput
    $input: UpdateUsersInput!
  ) {
    updateUsers(condition: $condition, input: $input) {
      bio
      birthdate
      city
      created_at
      description
      email
      emergency_contact_name
      emergency_contact_number
      fake
      first_name
      gender
      id
      last_name
      middle_name
      phone_number
      preferred_name
      program_name
      role
      state
      street_address
      stripe_customer_id
      stripe_subscription_id
      subscription_end_date
      subscription_status
      timezone
      uid
      updated_at
      website
      zip
      __typename
    }
  }
`;
