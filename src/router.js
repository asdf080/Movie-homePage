import { Outlet, createBrowserRouter } from "react-router-dom";
import App from './App';
import NotFound from "./routes/NotFound";
import Movies from "./routes/Movies";
import Tv from "./routes/Tv";
import Detail from "./routes/Detail";
// https://reactrouter.com/en/main/start/tutorial

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/detail/:id",
        element: <Detail/>
      },
      {
        path: "/movies",
        element: <Movies/>
      },
      {
        path: "/tv",
        element: <Tv/>
      }
    ]
  },
]);

export default router