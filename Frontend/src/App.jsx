import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './assets/pages/Cadastro';
import Login from './assets/pages/Login';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
