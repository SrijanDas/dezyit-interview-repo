// import { Route, Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Users from "./components/Users";
import { useEffect, useState } from "react";
import axios from "axios";
import SavedPosts from "./components/SavedPosts";

// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      // console.log(res);
      setUsers(res.data);
    };
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      // console.log(res);
      setposts(res.data);
    };

    fetchUsers();
    fetchPosts();
  }, []);
  const [page, setPage] = useState("users");
  const [savedPosts, setSavedPosts] = useState([]);
  const [savedPostsIds, setSavedPostsIds] = useState([]);

  const handleSearch = (e, searchTerm) => {
    e.preventDefault();
    if (!searchTerm) return;

    let filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().match(searchTerm.toLowerCase())
    );

    setposts(filteredPosts);
  };

  const addToFavorites = (post) => {
    setSavedPosts((prev) => [...prev, post]);
    setSavedPostsIds((prev) => [...prev, post.id]);
  };

  const removeFromFavorites = (postToRemove) => {
    setSavedPosts(() =>
      savedPosts.filter((post) => post.id !== postToRemove.id)
    );
    setSavedPostsIds(() =>
      savedPostsIds.filter((id) => id !== postToRemove.id)
    );
  };

  return (
    <>
      <Navbar setPage={setPage} />

      <div className="">
        {page === "users" ? (
          <Users users={users} />
        ) : page === "posts" ? (
          <Posts
            posts={posts}
            savedPostsIds={savedPostsIds}
            handleSearch={handleSearch}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ) : page === "savedPosts" ? (
          <SavedPosts
            posts={savedPosts}
            savedPostsIds={savedPostsIds}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
