import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Offer from "./components/Offer/Offer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutUs />

        <Offer />
      </main>

      <Footer />
    </>
  );
}

export default App;
