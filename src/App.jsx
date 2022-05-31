import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import { QueryClient, QueryClientProvider } from 'react-query'
import ProviderFormulario from "./context/contextoFormulario";

function App() {

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <ProviderFormulario>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/formularioEntrada" element={<Formulario />} />
        </Routes>
      </QueryClientProvider>
      </ProviderFormulario>
    </div>
  );
}

export default App;
