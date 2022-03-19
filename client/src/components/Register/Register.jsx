import React, { useState } from "react";

const Register = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    // provider: "local",
    // email: "",
  });
  
  async function authenticateBE(newUser) {
    // //Frontend
    // setUser((previous) => {
    //   return [...previous, newUser];
    // });
    //Backend
    await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function authenticate(event) {
    if (user.username !== "") {
      authenticateBE(user);
      setUser({
        username: "",
        password: "",
        // provider: "",
        // email: "",
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
        <button onClick={authenticate}>Login</button>
      </form>
    </div>
  );
};

export default Register;
