import AddUserForm from "./components/AddUserForm.jsx";
import UserList from "./components/UserList.jsx";

const App = () => {
  return (
    <div>
      <h1>Користувачі GraphQL</h1>
      <AddUserForm />
      <UserList />
    </div>
  );
};

export default App;
