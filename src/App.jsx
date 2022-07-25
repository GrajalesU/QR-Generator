import "./App.css";
import Container from "./components/Container";
import QRForm from "./components/QRForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Container /> */}
      <QRForm />
      <Footer />
    </div>
  );
}

export default App;
