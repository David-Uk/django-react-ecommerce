import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route component={Home} exact path="/" />
          <Route component={ProductDetails} path="/product/:id" />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
