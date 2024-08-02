import React from 'react'
import ReactDOM from 'react-dom/client'
import List from './pages/List.tsx'
import Root, {preLoadSWDATA} from "./pages/root.tsx";
import ErrorPage from "./pages/error.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: preLoadSWDATA,
    children: [
      {
        path: "list",
        element: <List />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
