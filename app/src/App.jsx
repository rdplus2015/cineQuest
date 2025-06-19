
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MoviesList from './pages/moviesList'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<MoviesList />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
