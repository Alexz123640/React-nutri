import { Route, Routes } from "react-router-dom"
import './bootstrap.min.css';
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import EstadoMedico from "./pages/EstadoMedico";
import Detalle from "./pages/detalle/Detalle";
import Cocinero from "./pages/Cocinero";


function App() {

  return (
    <div className="App">          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/estado_medico" element={<EstadoMedico />} />        
        <Route path="/detalle/:id" element={<Detalle />} />        
        <Route path="/cocinero" element={<Cocinero />} />        
      </Routes>
    </div>
  )
}

export default App
