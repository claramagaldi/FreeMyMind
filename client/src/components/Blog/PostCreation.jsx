import React, { useState } from "react";

const PostCreation = (props) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    time: "",
    timeString: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function addPost(event) {
    if (post.title !== "" && post.content !== "") {
      post.time = new Date();
      post.timeString = post.time.toLocaleString();
      props.fAddPost(post);
      setPost({
        title: "",
        content: "",
        time: "",
        timeString: "",
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
          <input
            name="time"
            value={post.time}
            onChange={handleChange}
            className="form-control"
            type="hidden"
            required
          />
          <input
            name="timeString"
            value={post.timeString}
            onChange={handleChange}
            className="form-control"
            type="hidden"
            required
          />
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
