import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Oferta from './pages/Oferta';
import Pagamento from './pages/Pagamento';
import Programacao from './pages/Programacao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/pagamento/:id" element={<Pagamento />} />
          <Route path="/programacao" element={<Programacao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
