import NavBar from "../src/components/navbar"
import "./App.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Cart from "./components/Cart"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <header>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </header>
  )
}

export default App;
