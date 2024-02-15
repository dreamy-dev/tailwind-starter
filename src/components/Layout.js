import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer";

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
