import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Fade from "@material-ui/core/Fade";
import "./blogStyles.css";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [popup, setPopup] = useState(true);
  const navigate = useNavigate();

  function closePopup(event) {
    // when mouse click at pop up screen
    // get if of current element
    let currentId = event.target.id;
    console.log(currentId);
    if (currentId !== "login") setPopup(false);
    navigate("/blog");
  }

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
      <Fade in={popup}>
        <div id="mask" className="mask" onClick={closePopup}>
          <div id="login" className="card">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Post;
