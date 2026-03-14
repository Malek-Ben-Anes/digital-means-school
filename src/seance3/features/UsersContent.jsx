export function UsersContent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return <UserRow users={users} />;
}

function UserRow({ users }) {
  return (
    <ul class="card">
      {users.map((item) => {
        return (
          <>
            <li>{item.name}</li>
            <li>{item.email}</li>
          </>
        );
      })}

      <button class="btn-danger">X</button>
    </ul>
  );
}
