import {Route,Routes } from "react-router-dom";
import './App.css';
import {Count } from "./components/Count/Count";
import { Footer } from "./components/Footer/Footer";
import { Header } from './components/Header/Header';

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/Item/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<h1>Carrito</h1>}/>
        </Routes>
        <h1>Tienda del Hogar</h1>
        <p>Bienvenidos a nuestra tienda del hogar, donde encontrarás todo lo que necesitas para cuidar y mimar tu hogar. Desde muebles de alta calidad hasta accesorios divertidos, tenemos todo lo que tu hogar necesita para ser feliz y cómodo. Explora nuestra amplia selección de productos y encuentra lo mejor para tu espacio.
        </p>
      </main>
      <Footer/>
    </>
  );
}

export default App
