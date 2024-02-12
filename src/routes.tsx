import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "@/components/PageTemplate";
import NotFoundPage from "@/pages/NotFoundPage";
import MainPage from "@/pages/MainPage";
import DateCalendar from "./components/DateCalendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/datecalendar",
    element: <DateCalendar />,
  },
]);

export default router;
