
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
function App() {


  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
</Routes>
</BrowserRouter>

  )
}

export default App
