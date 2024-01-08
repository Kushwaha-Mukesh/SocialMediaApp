import { useContext, useRef } from "react";
import { userContext } from "../store/Store";
import styles from "./CreatePost.module.css";
import { useNavigate } from "react-router-dom";
function CreatePost() {
  const navigate = useNavigate();
  const { addPostItem } = useContext(userContext);
  const addTitle = useRef();
  const addBody = useRef();
  const addTags = useRef();
  const addReaction = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const newPostItem = {
      id: new Date().getMilliseconds(),
      title: addTitle.current.value,
      body: addBody.current.value,
      tags: addTags.current.value.split(" "),
      reactions: addReaction.current.value,
    };
    addPostItem(newPostItem);
    addTitle.current.value = "";
    addBody.current.value = "";
    addTags.current.value = "";
    addReaction.current.value = "";
    navigate("/");
  }
  return (
    <form className={styles.createPost} onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={addTitle}
          placeholder="Title for the post..."
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          type="textarea"
          ref={addBody}
          placeholder="Enter your content here..."
          rows="4"
          cols="50"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={addTags}
          placeholder="Add multiple tags using space..."
          className="form-control"
          id="tags"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reaction
        </label>
        <input
          type="text"
          ref={addReaction}
          placeholder="Here you can add dummy reactions."
          className="form-control"
          id="reaction"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
