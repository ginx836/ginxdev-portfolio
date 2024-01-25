import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import ActiveProject from './pages/ProjectsDetails'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

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
        path: '/contact',
        element: <Contact />,
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
