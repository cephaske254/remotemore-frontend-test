import SearchPage from "pages/search";
import { createHashRouter } from "react-router-dom";

const hashRouter = createHashRouter([
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "*",
    element: null,
  },
]);

export default hashRouter;
