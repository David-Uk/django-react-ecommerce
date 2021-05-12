import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h3>Hello</h3>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
