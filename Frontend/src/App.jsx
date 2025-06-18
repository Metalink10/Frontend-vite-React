import BrowserRouter from 'react-router-dom/BrowserRouter'
import { Route, Routes } from 'react-router-dom' 
import Cadastro from './assets/pages/Cadastro'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
