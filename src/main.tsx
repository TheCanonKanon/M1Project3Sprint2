import React from 'react'
import ReactDOM from 'react-dom/client'
import List from './pages/List.tsx'
import Root from "./pages/root.tsx";
import ErrorPage from "./pages/error.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Detail from "./pages/Detail.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "list",
        element: <List />,
      },
      {
        path: "details/:id",
        element: <Detail />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
