import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
//import Navbar from "./components/Navbar";
import { ToastContainer, Bounce } from "react-toastify";
import Home from "./components/Home";
import Todos from "./components/Todos";
import ViewTodos from "./components/ViewTodos";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Navbar />
//         <Home />
//       </div>
//     ),
//   },
//   {
//     path: "/todos",
//     element: (
//       <div>
//         <Navbar />
//         <Todos />
//       </div>
//     ),
//   },
//   {
//     path: "/todos/:id",
//     element: (
//       <div>
//         <Navbar />
//         <ViewTodos />
//       </div>
//     ),
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/todos/:id",
        element: <ViewTodos />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
