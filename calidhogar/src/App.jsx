import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Main/Main'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
