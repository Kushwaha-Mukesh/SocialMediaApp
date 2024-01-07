import { createContext, useEffect, useReducer, useState } from "react";

export const userContext = createContext({
  postList: [],
  addPostItem: () => {},
  deletePostItem: () => {},
});

function reducer(postList, action) {
  let newPostListItem = postList;
  if (action.type === "CREATE_POST") {
    newPostListItem = [action.payload, ...postList];
  } else if (action.type === "DELETE_POST") {
    newPostListItem = postList.filter(
      (post) =>
        post.id !== action.payload.postID ||
        post.title !== action.payload.postTitle
    );
  } else if (action.type === "FETCH_POST") {
    newPostListItem = [...action.payload];
  }
  return newPostListItem;
}

export function AppContainer({ children }) {
  const [postList, dispatchPostList] = useReducer(reducer, []);
  const [loader, setLoader] = useState(false); // this state is created for the loader component when the fetching of data takes time.
  const addPostItem = (newPostItem) => {
    dispatchPostList({ type: "CREATE_POST", payload: newPostItem });
  };
  const deletePostItem = (postID, postTitle) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postID, postTitle } });
  };
  // const fetchPostList = (fetchPost) => {
  //   dispatchPostList({ type: "FETCH_POST", payload: fetchPost });
  // };

  // useEffect is used to fetch the data from the server i.e dummyapi.com when the page is loaded.
  useEffect(() => {
    setLoader(true);
    const controller = new AbortController(); // AbortController gives us signal with the help of which we can cancel the api request.
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatchPostList({ type: "FETCH_POST", payload: data.posts });
        setLoader(false);
      });

    return () => {
      // this is used to clear the useEffect hook when the component is destroyed or removed from the react DOM.
      controller.abort(); // abort method is used to abort the api request.
    };
  }, []);
  return (
    <userContext.Provider
      value={{ loader, postList, addPostItem, deletePostItem }}
    >
      {children}
    </userContext.Provider>
  );
}
