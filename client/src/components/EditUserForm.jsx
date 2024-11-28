import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER, GET_USERS } from "../graphql/queries";

const EditUserForm = ({ user, onClose }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ variables: { id: user.id, name, age: parseInt(age) } });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Редагувати користувача</h3>
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
      <button type="submit">Зберегти</button>
      <button type="button" onClick={onClose}>
        Скасувати
      </button>
    </form>
  );
};

export default EditUserForm;
