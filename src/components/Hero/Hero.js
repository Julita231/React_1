import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="container flex">
        <div className="hero-content">
          <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
          <p>Nie wierz nam na słowo - sprawdź</p>
          <a className="btn" href="#offer">
            Oferta
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
