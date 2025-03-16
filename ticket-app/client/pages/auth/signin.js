import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: { email, password },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign in</h1>

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
      {errors}

      <button className="btn btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
};
