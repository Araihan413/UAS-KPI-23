import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Pages/home'
import VideoPage from './components/Pages/videoPage';
import VisualPage from './components/Pages/visualPage'
import AudioPage from './components/Pages/audioPage';
import ErrorPage from './components/Pages/errorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/video',
    element: <VideoPage />,
  },
  {
    path: '/visual',
    element: <VisualPage />,
  },
  {
    path: '/audio',
    element: <AudioPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <div className='bg-stone-100'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
