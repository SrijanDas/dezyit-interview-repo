import React from "react";
import { AiFillHeart } from "react-icons/ai";

function SavedPosts({
  posts,
  savedPostsIds,
  addToFavorites,
  removeFromFavorites,
}) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">SavedPosts</h1>

      <div className="flex flex-col gap-4">
        {posts.length
          ? posts.map((post, i) => (
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
                    Remove from Favourites
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
            ))
          : "No Saved Posts"}
      </div>
    </div>
  );
}

export default SavedPosts;
