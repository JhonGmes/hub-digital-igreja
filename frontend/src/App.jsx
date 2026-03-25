import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Oferta from './pages/Oferta';
import Pagamento from './pages/Pagamento';
import Programacao from './pages/Programacao';
import Configuracao from './pages/Configuracao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="oferta" element={<Oferta />} />
          <Route path="pagamento/:id" element={<Pagamento />} />
          <Route path="programacao" element={<Programacao />} />
          <Route path="configuracao" element={<Configuracao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
