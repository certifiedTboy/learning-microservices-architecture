import { useState } from "react";
import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/users/signup", {
        email,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Sign up
      </button>
    </form>
  );
};
