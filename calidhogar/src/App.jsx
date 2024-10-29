import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Main/Main'
import Registro from './Registro/Registro';
import Footer from './components/Footer/Footer';
import Adoptar from './Adoptar/Adoptar';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/registrarse" element={<Registro />}></Route>
        <Route path="/adoptar" element={<Adoptar />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
