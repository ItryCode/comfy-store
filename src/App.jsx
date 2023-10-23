import {
  RouterProvider,
  createBrowserRouter,
  useNavigation,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";
import viteLogo from "/vite.svg";
import { loader as landingLoader } from "./pages/Landing";
import { loader } from "./pages/SingleProduct";
import { loader as proLoader } from "./pages/Products";
import { loader as checkLoader } from "./pages/Checkout";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "/products",
        element: <Products />,
        loader: proLoader,
        errorElement: <Error />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: loader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: checkLoader(store),
        action: checkoutAction(store),
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
