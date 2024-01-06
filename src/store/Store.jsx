import { createContext, useReducer } from "react";

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
    newPostListItem = postList.filter((post) => post.id !== action.payload);
  }
  return newPostListItem;
}

export function AppContainer({ children }) {
  const [postList, dispatchPostList] = useReducer(reducer, defaultPost);
  const addPostItem = (newPostItem) => {
    dispatchPostList({ type: "CREATE_POST", payload: newPostItem });
  };
  const deletePostItem = (postID) => {
    console.log(postID);
    dispatchPostList({ type: "DELETE_POST", payload: postID });
  };
  return (
    <userContext.Provider value={{ postList, addPostItem, deletePostItem }}>
      {children}
    </userContext.Provider>
  );
}

const defaultPost = [
  {
    id: "1",
    title: "Travelling GOA",
    body: "From Lahan Nepal to GOA India, with the hope of exploration and enjoyment and entertainment.",
    tags: ["Travelling", "Holiday", "Enjoy"],
    reaction: 13,
  },
  {
    id: "2",
    title: "Time",
    body: "It is something that you waste when you have it and regret when you don't have it. So utilise the time you have and say goodbye to regret.",
    tags: ["Time", "Motivation", "regret"],
    reaction: 22,
  },
  {
    id: "3",
    title: "Irony",
    body: "We have same age group to fall in love, make carrer and to enjoy. And every thing need focus to succeed in. When you go for one another is waste and at last you will live with regret.",
    tags: ["Irony", "realization"],
    reaction: 100,
  },
];
