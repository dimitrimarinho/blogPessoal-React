import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listatema/ListaTema';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route
              path="/*"
              element={<Navigate to="/home" replace />}
            />
          </Routes>
        </div>
        <Footer />
      </Router >
    </Provider>
  );
}

export default App;