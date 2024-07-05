import { useRoutes } from "react-router-dom";
import MainLayout from "@/layouts/Mainlayout/Mainlayout";
import Home from "@/pages/Home";
import ProductPage from "@/pages/ProductPage";
import Media from "@/pages/Media/Media";
import Page from "@/pages/Page/Page";
import Post from "@/pages/Post";
import Static from "@/pages/Static";
import Login from "@/pages/Auth/Login/Login";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "product",
          element: <ProductPage />,
        },
        {
          path: "media",
          element: <Media />,
        },
        {
          path: "page",
          element: <Page />,
        },
        {
          path: "post",
          element: <Post />,
        },
        {
          path: "static",
          element: <Static />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return routeElements;
}
