import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Pages/home'
import VideoPage from './components/Pages/videoPage';
import VisualPage from './components/Pages/visualPage'
import AudioPage from './components/Pages/audioPage';
import ErrorPage from './components/Pages/errorPage';
import ArtikelPage from './components/Pages/artikelPage';
import AudioVisualPage from './components/Pages/audioVisualPage';
import { ReadArtikelPage1, ReadArtikelPage2, ReadArtikelPage3 } from './components/Pages/readArtikelPage';

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
    path: '/audio visual',
    element: <AudioVisualPage />,
  },
  {
    path: '/artikel/artikel Ali Radja',
    element: <ReadArtikelPage1 />,
  },
  {
    path: '/artikel/artikel Diyah',
    element: <ReadArtikelPage2 />,
  },
  {
    path: '/artikel/artikel Nadiyah',
    element: <ReadArtikelPage3 />,
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
