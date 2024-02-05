import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Offer from "./components/Offer/Offer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <section className="about-us" id="aboutus">
          <div className="container">
            <h2 className="workers">Nasi Specjaliści</h2>
            <div className="people flex">
              <img src="./assets/people1.jpg" alt="ppl1" />
              <div className="people-description">
                <p className="ppl-name">Imię i Nazwisko [ dział ]</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  illum repellendus incidunt nesciunt accusamus ea omnis cum
                  facere. Quibusdam quasi repudiandae eos reiciendis consectetur
                  assumenda illum, ipsa ex reprehenderit possimus.
                </p>
              </div>
            </div>
            <div className="people flex">
              <img src="./assets/people2.jpg" alt="ppl2" />
              <div className="people-description">
                <p className="ppl-name">Imię i Nazwisko [ dział ]</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  illum repellendus incidunt nesciunt accusamus ea omnis cum
                  facere. Quibusdam quasi repudiandae eos reiciendis consectetur
                  assumenda illum, ipsa ex reprehenderit possimus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Offer />
      </main>

      <footer className="footer">
        <div className="container-footer footer-flex">
          <div className="copyright">
            Nazwa firmy - wszelkie prawa zastrzeżone, 2019
          </div>
          <div className="icons">
            <div className="icons-item">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="icons-item">
              <i className="fa-brands fa-square-facebook"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
