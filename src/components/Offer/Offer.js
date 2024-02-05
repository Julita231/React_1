import BoxItem from "./BoxItem/BoxItem";
import "./Offer.css";
import offersArr from "../../data/offers";

function Offer() {
  return (
    <section className="offer flex" id="offer">
      <div className="container">
        <h2 className="offer-title">Czym zajmuje się nasza firma?</h2>
        <div className="box flex">
          {offersArr.map((offer) => {
            return <BoxItem offer={offer} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Offer;
