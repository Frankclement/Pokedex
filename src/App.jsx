// Rutas
import { Route, Routes } from 'react-router-dom'
// STYLE
import './App.css'
// COMPONENTES
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokedexName from './pages/PokedexName'

// HOOKS



function App() {


  return (
    <div className={`content`}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/pokedex' element={<Pokedex/>} />
              <Route path='/pokedex/:name' element = {<PokedexName/>}/>
            </Route>
          </Routes>
    </div>
  )
}

export default App
