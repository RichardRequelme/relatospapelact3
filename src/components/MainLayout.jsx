import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = ({ children, cartCount }) => {
  return (
    <div className="layout">
      <Header />
      <Navbar cartCount={cartCount} />

      <main className="layout__main">
        {children}
      </main>

      <Footer />
    </div>
  );
};

