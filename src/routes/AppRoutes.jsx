import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./config/AppRouters-config";
const router = createBrowserRouter(routerConfig);

function AppRoutes() {
  return (
    //  <h1 className="text-3xl font-bold underline">
    //       AppRoute!!
    //   </h1>

    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default AppRoutes;