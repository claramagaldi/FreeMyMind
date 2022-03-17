import React, { useState } from "react";

const PostCreation = (props) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    time: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function addPost(event) {
    if (post.title !== "" && post.content !== "") {
      post.time = new Date(Date.now()).toString();
      props.fAddPost(post);
      setPost({
        title: "",
        content: "",
        time: "",
      });
      event.preventDefault();
    }
  }

  return (
    <div>
      <form>
        <div class="form-group">
          <input
            name="title"
            value={post.title}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="Title"
            required
          />
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            className="form-control"
            rows="5"
            cols="30"
            placeholder="Post"
          ></textarea>
        </div>
        <button
          class="btn btn-primary"
          type="submit"
          name="button"
          onClick={addPost}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default PostCreation;
