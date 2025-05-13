import { useEffect, useState } from "react";
import User from "./User.jsx";

function ProfileName() {
  const [username, setUsername] = useState("amit07d");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    if (!username.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (data) {
        setUserData(data);
      }
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="max-w-md mx-auto bg-white p-4 rounded shadow text-center">
        <h2 className="text-lg font-semibold mb-4">GitHub Profile Finder</h2>
        <div className="flex gap-2 mb-4">
          <input
            name="Search-by-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Search GitHub Username..."
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {loading && <p className="text-sm text-gray-500">Loading...</p>}
      </div>

      {userData && <User user={userData} />}
    </div>
  );
}

export default ProfileName;
