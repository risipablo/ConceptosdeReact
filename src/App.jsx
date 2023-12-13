import Navbar from "./components/Navbar";
import { ItemDetailContainer } from "./components/itemdetailcontainer";
import ItemlistContainer from "./components/itemlistcontainer";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/contacto";
import Compras from "./components/compras";
import { CartProvider } from "./context/cartcontext";
import Checkout from "./components/checkout";



function App() {
  return (

    <div>
      
      <CartProvider> 
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemlistContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/" element={<ItemlistContainer />} />
            <Route path="/productos/:categoria" element={<ItemlistContainer />} />
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Compras/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>

        </BrowserRouter>
      </CartProvider>

    </div>
  )
}

export default App;
