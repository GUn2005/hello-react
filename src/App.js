import { useState } from "react";
import logo from "./logo.svg";
import Page from "./page.js";

function App() {
  const [users, setUsers] = useState([
    { number: 1, name: "jackkie", description: "123" },
    { number: 2, name: "minkai", description: "456" },
    { number: 3, name: "bek", description: "789" },
    { number: 4, name: "hao", description: "101" },
  ]);
  return (
    <div className="app">
      <h1 className="head">Hello React!</h1>
      <div className="ball"></div>
      {users.map((user) => (
        <Page
          number={user.number}
          name={user.name}
          description={user.description}
        />
      ))}
    </div>
  );
}

export default App;
