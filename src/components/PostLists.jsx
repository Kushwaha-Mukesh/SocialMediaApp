// import { useContext, useEffect } from "react";
import { userContext } from "../store/Store";
import PostList from "./PostList";
import Loader from "./Loader";
import { useContext } from "react";

function PostLists() {
  const { loader } = useContext(userContext); // loader state is coming from store.jsx
  // const { fetchPostList } = useContext(userContext);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", {signal})
  //     .then((res) => res.json())
  //     .then((data) => fetchPostList(data.posts));

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);
  return (
    <>
      {loader && <Loader />}
      <PostList />
    </>
  );
}

export default PostLists;

// in the above code the loader component is loaded when fetching of data takes time from the server
