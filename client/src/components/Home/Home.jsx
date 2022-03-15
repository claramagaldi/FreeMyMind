import React from "react";
import "./home.css"

const Home = () => {
  return (
    <div className="home containerHome">
      <iframe
        src="https://i.giphy.com/media/ZMQpwaa37PXbsPYRoe/giphy.webp"
        width="270"
        height="480"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h1>An app designed to free your mind of things you don't need to memorize, so you can use that extra memory for <span className="blink">cool</span> stuff.</h1>
    </div>
  );
};

export default Home;
