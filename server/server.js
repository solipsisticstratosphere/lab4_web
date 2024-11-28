const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type User {
        id: ID
        name: String
        age: Int
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(name: String, age: Int): User
        deleteUser(id: ID): User
        updateUser(id: ID, name: String, age: Int): User
    }
`);

let users = [];

const root = {
  users: () => users,
  addUser: ({ name, age }) => {
    const user = { id: `${users.length + 1}`, name, age };
    users.push(user);
    return user;
  },
  deleteUser: ({ id }) => {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return null;
    return users.splice(index, 1)[0];
  },
  updateUser: ({ id, name, age }) => {
    const user = users.find((user) => user.id === id);
    if (!user) return null;
    if (name !== undefined) user.name = name;
    if (age !== undefined) user.age = age;
    return user;
  },
};

module.exports = { schema, root };

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}/graphql`);
});
