import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Pages/home'
import VideoPage from './components/Pages/videoPage';
import VisualPage from './components/Pages/visualPage'
import AudioPage from './components/Pages/audioPage';
import ErrorPage from './components/Pages/errorPage';
import ArtikelPage from './components/Pages/artikelPage';
import AudioVisualPage from './components/Pages/audioVisualPage';
import VideoAnimasiPage from './components/Pages/videoAnimasiPage';
import { ReadArtikelPage1, ReadArtikelPage2, ReadArtikelPage3 } from './components/Pages/readArtikelPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/artikel',
    element: <ArtikelPage />,
  },
  {
    path: '/video',
    element: <VideoPage />,
  },
  {
    path: '/video animasi',
    element: <VideoAnimasiPage />,
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
      <div className=''>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
