import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import {AuthLayout, Profile} from "./components/index.js"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element:(
          <AuthLayout authentication={false}>
            <SignUpPage/>

          </AuthLayout>
        ),
      },
      {
        path: "/signin",
        element:(
          <AuthLayout authentication={false}>
            <LoginPage/>

          </AuthLayout>
        ),
      },
      {
        path: "/profile",
        element:(
          <AuthLayout authentication={true}>
            <Profile/>

          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
