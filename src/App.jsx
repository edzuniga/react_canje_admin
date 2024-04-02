import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { ErrorPage } from "./components/pages/Error";
import { RootPage } from "./components/pages/Root";
import { RecoverPage } from "./components/pages/Recover";

//Define the ROUTER
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "recover", element: <RecoverPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
