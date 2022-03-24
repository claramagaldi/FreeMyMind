import React, { useState, useEffect } from "react";
import PostCreation from "./PostCreation";
import "./postStyles.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // This method fetches the records from the database.
  // Backend
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/posts/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const posts = await response.json();
      //Frontend
      setPosts(posts);
    }
    getRecords();
    return;
  }, [posts.length]);

  async function addPost(newPost) {
    //Frontend
    setPosts((previous) => {
      return [...previous, newPost];
    });
    //Backend
    await fetch("http://localhost:5000/post/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  return (
    <div className="containerBlog">
      <PostCreation fAddPost={addPost} />
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post">
              <h3>{post.title}</h3>
              <small>{post.timeString}</small>
              <p>
                {post.content.substring(0, 100) + " ... "}
                <a href={"/blog/" + post._id}>Read More</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
