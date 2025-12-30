import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = ({ children, cartCount }) => {
  return (
    <>
      <Header />
      <Navbar cartCount={cartCount} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
