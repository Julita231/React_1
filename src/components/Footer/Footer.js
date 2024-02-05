import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer footer-flex">
        <div className="copyright">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </div>
        <div className="icons">
          <div className="icons-item">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="icons-item">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
//
