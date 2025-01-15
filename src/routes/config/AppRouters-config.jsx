import Main from "../../pages/Main";


const routerConfig = [
  {
    path: "/",
    // element: <Layout />,
    children: [
      // { path: "/", element: <Home /> },
      { index: true, element: <Main /> },
      // { path: "SPA", element: <Home /> },
      // { path: "MPA", element: <Home /> },
    ],
  },
]

export { routerConfig };