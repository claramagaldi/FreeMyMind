import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";


const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getRecord() {
      const response = await fetch(`http://localhost:5000/post/` + id);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const singlePost = await response.json();

      //Frontend
      setPost(singlePost);
    }
    getRecord();
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
