import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/auth/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <h2>All Users</h2>

      {users.map((u) => (
        <div key={u._id} style={{ border: "1px solid #ccc", margin: 5, padding: 5 }}>
          <p>Name: {u.name}</p>
          <p>Email: {u.email}</p>
          <p>Role: {u.role}</p>
        </div>
      ))}
    </div>
  );
}