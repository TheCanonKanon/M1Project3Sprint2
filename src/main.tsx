import ReactDOM from 'react-dom/client'
import List from './pages/List.tsx'
import Root from "./pages/root.tsx";
import ErrorPage from "./pages/error.tsx";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Detail from "./pages/Detail.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Authy from "./pages/Authy.tsx";
import Chat from "./pages/Chat.tsx";
import { getAuth } from "firebase/auth";


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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "auth",
        action: Authy,
      },
      {
        path: "Chat",
        element: <Chat />,
        loader: () => {
          const user = getAuth().currentUser;
          if(user === null) {
            return redirect("/login")
          }
          return null
        }
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
