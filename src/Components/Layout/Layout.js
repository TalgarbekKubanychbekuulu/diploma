import Footer from "../Footer/Footer";
import Headers from "../Headers/Headers";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";

function Layout({ children }) {
  return (
    <main className="Layout">
      <Nav />
      <div className="container">
        {children}
      </div>
      <Headers />
      <Main />
      <Footer />
    </main>
  );
}

export default Layout;