import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './default-layout/DefaultLayout'
import HomePage from './pages/HomePage'
import MovieDetailPage from './pages/DetailPage'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path='/movie' element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
