import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";

// Layout
import { MainLayout } from "./components/MainLayout";

// Páginas
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Checkout from "./pages/Checkout";
import {CartPage} from "./pages/CartPage";
//estilos
import "./styles/main.css";

const App = () => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((book) => book.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Routes>
        {/* landing */}
        <Route path="/" element={<Landing />} />

        {/* app */}
        <Route
          path="/*"
          element={
            <MainLayout cartCount={cart.length}>
              <Routes>
                <Route path="home" element={<Home />} />

                <Route
                  path="book/:id"
                  element={<BookDetail addToCart={addToCart} />}
                />

                <Route
                  path="cart"
                  element={
                    <CartPage
                      cart={cart}
                      removeFromCart={removeFromCart}
                    />
                  }
                />

                <Route
                  path="checkout"
                  element={<Checkout cart={cart} clearCart={clearCart} />}
                />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
