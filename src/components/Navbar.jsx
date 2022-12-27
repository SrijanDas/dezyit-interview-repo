import React from "react";

function Navbar({ setPage }) {
  return (
    <nav className="bg-gray-200 flex w-screen p-10 space-x-5 text-lg">
      <span
        onClick={() => setPage("users")}
        className="cursor-pointer hover:text-blue-500"
      >
        Users
      </span>

      <span
        onClick={() => setPage("posts")}
        className="cursor-pointer hover:text-blue-500"
      >
        Posts
      </span>
      <span
        onClick={() => setPage("savedPosts")}
        className="cursor-pointer hover:text-blue-500"
      >
        Saved Posts
      </span>
    </nav>
  );
}

export default Navbar;
