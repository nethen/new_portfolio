import "./Footer.scss";
import singlesparkle from "../../assets/singlesparkle.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__left">
            <p className="footer__copyright">© Michelle Swolfs 2023</p>
          </div>

          <div className="footer__right">
            <a href="" className="footer__link">
              Email ↗
            </a>
            <img className="footer__sparkle" src={singlesparkle} />
            <a href="" className="footer__link">
              Linkedin ↗
            </a>
            <img className="footer__sparkle" src={singlesparkle} />
            <a href="" className="footer__link">
              Github ↗
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
