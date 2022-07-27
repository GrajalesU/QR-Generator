import "./App.css";
import Container from "./components/Container";
import QRForm from "./components/QRForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Container />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<QRForm />} />
          <Route path="*" element={<Container />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
