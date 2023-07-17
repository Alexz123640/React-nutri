import { Route, Routes } from "react-router-dom"
import './bootstrap.min.css';
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import EstadoMedico from "./pages/EstadoMedico";


function App() {

  return (
    <div className="App">          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/estado_medico" element={<EstadoMedico />} />        
      </Routes>
    </div>
  )
}

export default App
