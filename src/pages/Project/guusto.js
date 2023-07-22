import "./project.scss";
import ProjectHeader from "../../components/ProjectHeader/projectheader";
import guustologo from "../../assets/guusto.svg";
import { Link } from "react-router-dom";

function Guusto() {
  return (
    <>
      <ProjectHeader img={guustologo} bgcolor="#22315C"></ProjectHeader>
      <div className="content">
        <div className="content__box">
          <div className="content__group">
            <p className="content__summary">So... I wore a lot of hats.</p>
            <p className="content__body">
              During my 3+ years at Guusto, I had the opportunity to be involved
              in a wide scope of projects that required a number of different
              skill sets. Including. but not limited to:
            </p>
          </div>
          <div className="content__group">
            <p className="content__section-heading">Product Design</p>
            <p className="content__body">
              On the product side, I was in charge of refreshing, updating, and
              maintaining the company’s mobile application on the design side,
              as well as creating the user flows for key product integrations
              such as Microsoft Teams and Slack.
            </p>

            <Link to="" className="project-link__tag">
              <div className="project-link">
                <div className="coming-soon">
                  <p className="coming-soon__tag">coming soon</p>
                </div>
                <p>Mobile Application Overhaul</p>
              </div>
            </Link>
          </div>

          <div className="content__group">
            <p className="content__section-heading">Brand & Identity</p>
            <p className="content__body">
              In terms of brand design, I played a major role in the execution
              of a significant brand update to bring consistency, clarity, and
              detailed documentation regarding the company’s messaging and
              visual identity across as number of platforms.
            </p>
          </div>

          <div className="content__group">
            <p className="content__section-heading">Web Development</p>
            <p className="content__body">
              Lastly, I am the main developer in charge of implementing changes
              to the company’s marketing website, which you can check out at
              guusto.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guusto;
