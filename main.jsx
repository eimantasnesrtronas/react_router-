import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './pages/about_page.jsx';
import Game_Page from './pages/Game_page.jsx';
import Anime_Page from './pages/anime_page.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes >
      <Route index element={<App/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/game' element={<Game_Page/>} />
      <Route path='/anime' element={<Anime_Page/>} />
      </Routes>
  </BrowserRouter>,
)
