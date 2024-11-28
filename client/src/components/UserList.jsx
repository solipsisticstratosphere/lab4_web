import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/queries";
import DeleteUserButton from "./DeleteUserButton";
import EditUserForm from "./EditUserForm";
import { useState } from "react";
const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [editingUser, setEditingUser] = useState(null); // Користувач, який редагується

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  return (
    <div>
      <h2>Список користувачів:</h2>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name} (Вік: {user.age})
            <button onClick={() => setEditingUser(user)}>Редагувати</button>
            <DeleteUserButton id={user.id} />
          </li>
        ))}
      </ul>
      {editingUser && (
        <EditUserForm user={editingUser} onClose={() => setEditingUser(null)} />
      )}
    </div>
  );
};

export default UserList;
