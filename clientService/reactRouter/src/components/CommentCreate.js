import React, { useState } from "react";
import axios from "axios";
const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const commentSubmitHandler = async (event) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  const commentChangeHandler = (event) => {
    setContent(event.target.value);
  };
  return (
    <div>
      <form onSubmit={commentSubmitHandler}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            type="text"
            name="content"
            className="form-control"
            onChange={commentChangeHandler}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
