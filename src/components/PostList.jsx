import { useContext } from "react";
import { userContext } from "../store/Store";
import styles from "./PostList.module.css";
import { TiDeleteOutline } from "react-icons/ti";

function PostList() {
  const { postList, deletePostItem } = useContext(userContext);
  return (
    <>
      {postList.map((post) => {
        return (
          <div key={post.id} className={`card ${styles.postContainer}`}>
            <div className="card-body">
              <h5 className={`card-title ${styles.postHeading}`}>
                {post.title}
              </h5>
              <p className={`card-text ${styles.postBody}`}>{post.body}</p>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`badge text-bg-primary ${styles.tag}`}
                >
                  {tag}
                </span>
              ))}

              <p>
                <span className="badge rounded-pill text-bg-info">
                  {post.reactions} people reacted
                </span>
              </p>

              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => deletePostItem(post.id, post.title)}
              >
                <TiDeleteOutline />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PostList;
