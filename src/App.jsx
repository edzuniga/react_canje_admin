import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { ErrorPage } from "./components/pages/Error";
import { RootPage } from "./components/layouts/Root";
import { RecoverPage } from "./components/pages/Recover";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
