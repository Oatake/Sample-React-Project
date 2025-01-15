

const routerConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      // { path: "/", element: <Home /> },
      { index: true, element: <Home /> },
      { path: "SPA", element: <Home /> },
      { path: "MPA", element: <Home /> },

    ],
  },
]

export { routerConfig };