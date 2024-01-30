import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ActiveProject from './pages/ProjectsDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/projects/:id',
        element: <ActiveProject />,
      },
      {
        path: '/404',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
