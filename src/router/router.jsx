import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Comments from "../pages/Comments";
import Users from "../pages/Users";
import Post from "../pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
    ],
  },
  {
    path: '/sultanbek',
    element: <div>Sultanbek 12345 55555</div>
  }
]);
