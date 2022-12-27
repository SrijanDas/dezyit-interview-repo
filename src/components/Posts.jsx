import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

function Posts({
  posts,
  handleSearch,
  addToFavorites,
  removeFromFavorites,
  savedPostsIds,
}) {
  // console.log(posts);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Posts</h1>
      <form onSubmit={(e) => handleSearch(e, searchTerm)} className="my-4">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <div
            className="flex flex-col p-5 gap-2 rounded-md shadow-md border border-gray-300"
            key={post.id}
          >
            <span className="text-xl font-semibold">{post.title}</span>
            <span>{post.body}</span>
            <span>User Id: {post.userId}</span>

            {savedPostsIds.includes(post.id) ? (
              <button
                onClick={() => removeFromFavorites(post)}
                type="button"
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 flex gap-2 items-center justify-center"
              >
                <AiFillHeart className="h-5 w-5 text-red-400" />
                Added To Favourites
              </button>
            ) : (
              <button
                onClick={() => addToFavorites(post)}
                type="button"
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 flex gap-2 items-center justify-center"
              >
                <AiFillHeart className="h-5 w-5" />
                Add To Favourites
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
