import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddCliente from './components/AddCliente';
import AddPedido from './components/AddPedido';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadCliente" element={<AddCliente />} />
        <Route path="/cadPedido" element={<AddPedido />} />
      </Routes>
    </Router>
  );
}

export default App;
