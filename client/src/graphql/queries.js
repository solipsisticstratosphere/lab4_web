import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      id
      name
      age
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($name: String, $age: Int) {
    addUser(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID) {
    deleteUser(id: $id) {
      id
    }
  }
`;
export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String, $age: Int) {
    updateUser(id: $id, name: $name, age: $age) {
      id
      name
      age
    }
  }
`;
