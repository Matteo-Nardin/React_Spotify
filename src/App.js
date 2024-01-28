import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from './components/MyNavbar';
//Pages
import HomePage from './pages/homePage';
import AlbumPage from './pages/albumPage';
import ArtistsPage from './pages/artistsPage';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar/>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}/>
          <Route path="/album/:albumId" element={<AlbumPage></AlbumPage>}/>
          <Route path="/artist" element={<ArtistsPage></ArtistsPage>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
