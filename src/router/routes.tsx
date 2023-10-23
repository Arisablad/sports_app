import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import TablePage from "@/pages/TablePage.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/table/:leagueId",
    element: <TablePage />,
  },
]);

export default routes;
