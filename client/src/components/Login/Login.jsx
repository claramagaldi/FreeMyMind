import React, { useState } from "react";

const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    provider: "local",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function Authenticate(event) {
    if (user.username !== "" && user.password !== "") {
      //props.fAuthenticate(user);
      setUser({
        username: "",
        password: "",
        provider: "",
        email: "",
      });
      event.preventDefault();
    }
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <input
            name="username"
            type="email"
            onChange={handleChange}
            placeholder="freemymind@gmail.com"
            required
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="password"
            required
          />
        </div>
        <button onClick={Authenticate}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
