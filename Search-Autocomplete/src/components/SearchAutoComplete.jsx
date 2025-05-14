import { useEffect, useState } from "react";

function SearchAutoComplete() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        const names = data.users.map((user) => user.firstName);
        setUsers(names);
        setError(null);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter as user types
  useEffect(() => {
    const query = searchTerm.toLowerCase().trim();
    if (query === "") {
      setFilteredUsers([]);
      return;
    }
    const results = users.filter((name) =>
      name.toLowerCase().includes(query)
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading && <p className="mt-2 text-sm text-gray-500">Loading...</p>}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

      {!loading && filteredUsers.length > 0 && (
        <ul className="mt-4 border border-gray-200 rounded-md divide-y divide-gray-100">
          {filteredUsers.map((name, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              {name}
            </li>
          ))}
        </ul>
      )}

      {!loading && searchTerm && filteredUsers.length === 0 && (
        <p className="mt-2 text-sm text-gray-600">No users found.</p>
      )}
    </div>
  );
}

export default SearchAutoComplete;
