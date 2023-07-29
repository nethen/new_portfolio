import "./cta.scss";
import singleSparkle from "../../assets/singlesparkle.svg";

function CTA() {
  return (
    <>
      <section className="cta">
        <div className="cta__container">
          <p className="cta__header">
            Thanks for taking the time to learn about me!{" "}
          </p>
          <p className="cta__desc">
            If you’re looking for a quick chat, a new friend, or your next
            project partner - my inbox is always open.
          </p>

          <div className="cta__links">
            <a href="" className="cta__item">
              Email ↗
            </a>
            <img src={singleSparkle} className="cta__sparkle" />
            <a href="" className="cta__item">
              Linkedin ↗
            </a>
            <img src={singleSparkle} className="cta__sparkle" />
            <a href="" className="cta__item">
              Instagram ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
