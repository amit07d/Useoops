import React from "react";

function User({ user }) {
  const { avatar_url, followers, name, public_repos, html_url, created_at } =
    user;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-2xl overflow-hidden p-6 mt-6">
      <div className="flex flex-col items-center">
        <img
          src={avatar_url}
          alt="github-avatar"
          className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium">User joined on:</span>{" "}
          {new Date(created_at).toLocaleDateString()}
        </p>
        <p>
          <span className="font-medium">Public Repos:</span> {public_repos}
        </p>
        <p>
          <span className="font-medium">Followers:</span> {followers}
        </p>
        <p className="text-sm text-gray-700 mt-2">
          GitHub:{" "}
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            @{user.login}
          </a>
        </p>
      </div>
    </div>
  );
}

export default User;
