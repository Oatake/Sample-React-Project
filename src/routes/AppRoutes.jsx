import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerConfig } from "./config/AppRouters-config";

const router = createBrowserRouter(routerConfig);

function AppRoutes() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default AppRoutes;