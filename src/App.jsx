import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Paginas/Main/Main'
import Registro from './Paginas/Registro/Registro';
import RegistroRefugio from './Paginas/RegistroRefugio/RegistroRefugio';
import Footer from './components/Footer/Footer';
import Adoptar from './Paginas/Adoptar/Adoptar';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/registrarse" element={<Registro />}></Route>
        <Route path="/registrar-refugio" element={<RegistroRefugio />}></Route>
        <Route path="/adoptar" element={<Adoptar />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
