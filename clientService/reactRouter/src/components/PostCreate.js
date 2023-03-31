import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <button className="btn btn primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
