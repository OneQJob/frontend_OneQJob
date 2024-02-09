import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "./components/PageTemplate";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import RecruitDetailsPage from "./pages/RecruitDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "recruitDetails", element: <RecruitDetailsPage /> },
      { path: "recruitDetails", element: <RecruitDetailsPage /> },
    ],
  },
]);

export default router;
