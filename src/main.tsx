import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Counter from "./Counter";
import Pomodoro from "./Pomodoro";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/pomodoro",
        element: <Pomodoro />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
