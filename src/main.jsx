import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import { routes } from './routes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)