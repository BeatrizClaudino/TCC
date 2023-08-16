import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CriarConta from './paginas/createCount';
import Login from './paginas/Login';
import Home from './paginas/home';
function App() {
  const router = createBrowserRouter([
    {
      path: "/cadastro",
      element: <CriarConta />,
    },
    {
      path: "/home",
      element: <Home />,
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
