import Main from "../../pages/Main";
import Page1 from "../../pages/MPA/Page1";
import Page2 from "../../pages/MPA/Page2";
import Page3 from "../../pages/MPA/Page3";
import Home from "../../pages/SPA/Home";



const routerConfig = [
  { path: "/", element: <Main /> },
  { path: "/spa", element: <Home /> },
  { path: "/mpa", element: <Page1 /> },
  { path: "/mpa/2", element: <Page2 /> },
  { path: "/mpa/3", element: <Page3 /> },
]

export { routerConfig };