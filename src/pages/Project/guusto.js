import "./project.scss";
import ProjectHeader from "../../components/ProjectHeader/projectheader";
import guustologo from "../../assets/guusto.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Guusto() {
  return (
    <>
      <ProjectHeader img={guustologo} bgcolor="#22315C"></ProjectHeader>
      <div className="content">
        <div className="content__box">
          <div className="content__group-main">
            <p className="content__story-heading">
              So... I wore a lot of hats.
            </p>
            <p className="content__body">
              During my 3+ years at Guusto, I had the opportunity to be involved
              in a wide scope of projects that required a number of different
              skill sets. Including. but not limited to:
            </p>
          </div>
          <div className="content__group-main">
            <div className="content__bg" style={{ width: 100 }}></div>
            <p className="content__section-heading">Product Design</p>
            <p className="content__body">
              On the product side, I was in charge of refreshing, updating, and
              maintaining the company’s mobile application on the design side,
              as well as creating the user flows for key product integrations
              such as Microsoft Teams and Slack.
            </p>
          </div>

          <div className="content__group-main">
            <div className="content__bg" style={{ width: 100 }}></div>

            <p className="content__section-heading">Brand & Identity</p>
            <p className="content__body">
              In terms of brand design, I played a major role in the execution
              of a significant brand update to bring consistency, clarity, and
              detailed documentation regarding the company’s messaging and
              visual identity across as number of platforms.
            </p>
          </div>

          <div className="content__group-main">
            <div className="content__bg" style={{ width: 100 }}></div>

            <p className="content__section-heading">Web Development</p>
            <p className="content__body">
              Lastly, I was the main developer in charge of implementing changes
              to the company’s marketing website, which you can view at
              <a
                href="https://guusto.com/"
                target="_blank"
                className="content__inline-link"
              >
                guusto.com
              </a>
            </p>
          </div>

          <div className="content__group">
            <p className="content__section-heading">Featured Projects</p>

            <Link to="" className="project-link__tag">
              <div className="project-link">
                <div className="coming-soon">
                  <p className="coming-soon__tag">coming soon</p>
                </div>
                <p className="content__big-link">Mobile application refresh</p>
              </div>
            </Link>
            <Link to="" className="project-link__tag">
              <div className="project-link">
                <div className="coming-soon">
                  <p className="coming-soon__tag">coming soon</p>
                </div>
                <p className="content__big-link">Brand update</p>
              </div>
            </Link>

            <p className="content__body">
              If you want to learn more about my time at Guusto, feel free to
              reach out via
              <a
                href="mailto:swolfsmichelle8@gmail.com"
                className="content__inline-link"
              >
                email
              </a>
              or on
              <a
                href="https://www.linkedin.com/in/michelleswolfs/"
                className="content__inline-link"
                target="_blank"
              >
                Linkedin.
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Guusto;
