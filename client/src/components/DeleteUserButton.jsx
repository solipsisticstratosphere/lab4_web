import { useMutation } from "@apollo/client";
import { DELETE_USER, GET_USERS } from "../graphql/queries";

const DeleteUserButton = ({ id }) => {
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  return (
    <button onClick={() => deleteUser({ variables: { id } })}>Видалити</button>
  );
};

export default DeleteUserButton;
