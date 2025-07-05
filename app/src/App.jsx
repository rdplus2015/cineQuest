
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MoviesList from './pages/moviesList'
import MovieDetail from './pages/movieDetail'
import Favorites from './pages/favorites'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<MoviesList />}/> 
        <Route path='/moviedetail/:movieId' element={<MovieDetail/>} />
        <Route path='/favorites' element={<Favorites/>}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
