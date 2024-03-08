import * as React from "react";
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/pagesExport.js";
import Soon from "./routes/soon"
import ErrorPage from "./error-page.jsx";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/projects",
    element: <Soon />,
    errorElement: <ErrorPage />
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode >
);
