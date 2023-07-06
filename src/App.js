import './App.css';
import Header from './componentes/Header';
import Navmenu from './componentes/Navmenu';
import Footer from './componentes/Footer';
import Body from './componentes/Body';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sinopses from './pages/Sinopses';
import Contato from './pages/Contato';
import PageFilme from './pages/PageFilme';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navmenu />
        <Body>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/sinopses" element={<Sinopses />} />
            <Route path="/sinopses/:rota" element={<PageFilme />} />
            <Route path="/sobrenos" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element="Não encontrado" />
          </Routes>

        </Body>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
