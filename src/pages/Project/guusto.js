import "./project.scss";
import ProjectHeader from "../../components/ProjectHeader/projectheader";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import guustogroup from "../../assets/guusto_group.png";
import guustomobilebefore from "../../assets/guusto_mobile-before.png";
import guustomobileafter from "../../assets/guusto_mobile-after.png";
import guustomarketingcurrent from "../../assets/guusto_marketing-current.png";
import guustomarketingproposed from "../../assets/guusto_marketing-proposed.png";
import guustositeassets from "../../assets/guusto_site-assets.png";

function Guusto() {
  return (
    <>
      <ProjectHeader img={guustogroup} bgcolor="#717FAE"></ProjectHeader>
      <div className="content">
        <div className="content__box">
          <div className="content__group">
            <p className="content__summary">
              Guusto is a B2B company that provides employee recognition and
              customer rewards solutions through both monetary (sending gifts)
              and non-monetary (shoutouts) recognition.
            </p>
          </div>

          <p className="divider">Key Information</p>

          <div className="content__group-main">
            <p className="content__body">
              During my 3+ years at Guusto, I had the opportunity to be involved
              in a wide scope of projects that required a number of different
              skill sets. Including. but not limited to:
            </p>
          </div>

          <div className="content__examples">
            <div className="content__bg">
              <p className="content__body">Before</p>
              <img className="content__images-tall" src={guustomobilebefore} />
            </div>

            <div className="content__bg">
              <p className="content__body">After</p>

              <img className="content__images-tall" src={guustomobileafter} />
            </div>
          </div>
          <div className="solution-box">
            <div className="content__group-main">
              <p className="content__section-heading">Product Design</p>
              <p className="content__body">
                On the product side, I was in charge of refreshing, updating,
                and maintaining the company’s mobile application on the design
                side, as well as creating the user flows for key product
                integrations such as Microsoft Teams and Slack.
              </p>
            </div>
          </div>

          <div className="content__examples">
            <div className="content__bg">
              <p className="content__body">Current</p>
              <img
                className="content__images-tall"
                src={guustomarketingcurrent}
              />
            </div>

            <div className="content__bg">
              <p className="content__body">Proposed</p>

              <img
                className="content__images-tall"
                src={guustomarketingproposed}
              />
            </div>
          </div>
          <div className="solution-box">
            <div className="content__group-main">
              <p className="content__section-heading">Brand & Identity</p>
              <p className="content__body">
                In terms of brand design, I played a major role in the execution
                of a significant brand update to bring consistency, clarity, and
                detailed documentation regarding the company’s messaging and
                visual identity across as number of platforms.
              </p>
            </div>
          </div>
          <div className="content__group">
            <div className="content__bg-max">
              <img src={guustositeassets} className="project__img" />
            </div>

            <div className="content__group-main">
              <p className="content__section-heading">Web Development</p>
              <p className="content__body">
                Lastly, I was the main developer in charge of implementing
                changes to the company’s marketing website, which you can view
                at
                <a
                  href="https://guusto.com/"
                  target="_blank"
                  className="content__inline-link"
                >
                  guusto.com
                </a>
              </p>
            </div>
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
