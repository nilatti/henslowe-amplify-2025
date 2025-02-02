/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTheaters = /* GraphQL */ `
  query GetTheaters($id: Int!) {
    getTheaters(id: $id) {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: Int!) {
    getUsers(id: $id) {
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
export const listTheaters = /* GraphQL */ `
  query ListTheaters(
    $filter: ModelTheatersFilterInput
    $id: Int
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTheaters(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $id: Int
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
