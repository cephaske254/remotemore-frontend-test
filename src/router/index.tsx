import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import DashboardLayout from "layout/dashboard";
import ArtistDetail from "pages/artists/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/artists",
        children: [
          {
            path: ":id/",
            element: <ArtistDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
