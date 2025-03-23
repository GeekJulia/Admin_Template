import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Root from "./roots/roots";
import { LoadingHelper } from "./lib/LoadingHelper";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AssLanding from "./pages/AssLanding";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <Index />
            </Suspense>
          ),
        },
        {
          path: "/landing",
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <AssLanding />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
