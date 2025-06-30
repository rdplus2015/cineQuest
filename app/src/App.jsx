
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MoviesList from './pages/moviesList'
import MovieDetail from './pages/movieDetail'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<MoviesList />}/> 
        <Route path='/moviedetail' element={<MovieDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
