import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CriarConta from './paginas/createCount';
import Login from './paginas/login';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CriarConta />,
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} /></>
  )
}

export default App
