import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER, GET_USERS } from "../graphql/queries";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ variables: { name, age: parseInt(age) } });
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Додати користувача:</h2>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Вік"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default AddUserForm;
