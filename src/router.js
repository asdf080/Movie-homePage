import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./routes/NotFound";
import Movies from "./routes/Movies";
import Tv from "./routes/Tv";
import Detail from "./routes/Detail";
import Wrap23 from "./routes/Wrap23";
import Search from "./routes/Search";
import Chakra from "./routes/Chakra";
import People from "./routes/People";
// https://reactrouter.com/en/main/start/tutorial

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
      {
        path: "/wrap2023",
        element: <Wrap23 />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/chakra",
        element: <Chakra />,
      },
      {
        path: "/people",
        element: <People />,
      },
    ],
  },
]);

export default router;
