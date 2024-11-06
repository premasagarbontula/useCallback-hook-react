import { useCallback, useState } from "react";
import "./App.css";
import Search from "./components/Search";

const usersList = ["John", "Alex", "Ram", "Rohan", "Raj", "Priya"];

function App() {
  const [users, setUsers] = useState(usersList);
  const [filteredUsers, setFilteredUsers] = useState(usersList);

  const shuffleUsers = () => {
    const shuffled = [...users];
    shuffled.sort(() => Math.random() - 0.5);
    setUsers(shuffled);
    setFilteredUsers(shuffled);
  };

  const searchFilter = useCallback((text) => {
    console.log(users[0]);
    const filtered = users.filter((name) => name.toLowerCase().includes(text));
    setFilteredUsers(filtered);
  }, []);
  return (
    <div className="App">
      <h1>useCallback Hook</h1>
      <Search searchFilter={searchFilter} />
      <button onClick={shuffleUsers}>Shuffle</button>
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
