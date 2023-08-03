import "./about.scss";
import Navbar from "../../components/Navbar/navbar";
import mePhoto from "../../assets/me.png";
import SummaryBox from "../../components/SummaryBox/summarybox";
import Hackathons from "../../components/Hackathons/hackathons";
import Activity from "../../components/Activity/activity";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/Footer";
function about() {
  return (
    <>
      <Navbar></Navbar>

      <section className="about__top">
        <div className="about__top-container">
          <img src={mePhoto} className="about__photo" />
          <div className="about__top-content">
            <h1 className="about__header">Hi again, I’m Michelle! </h1>
            <p className="about__desc">
              Beyond Product Design, I’m a maker that enjoys taking things from
              0 to 1.
            </p>
          </div>
        </div>
      </section>

      <SummaryBox></SummaryBox>

      <section className="professional-stuff">
        <div className="professional-stuff__box">
          <div className="resume-things">
            <h2 className="about__h2">Work</h2>

            <div className="work">
              <p className="work__header">Education</p>
              <ul className="work__list">
                <li className="work__list-item">
                  Design @ Simon Fraser University{" "}
                </li>
                <li className="work__list-item">Development @ Brainstation</li>
              </ul>

              <p className="work__header">Key Experiences</p>
              <ul className="work__list">
                <li className="work__list-item">Junior Designer @ Guusto </li>
                <li className="work__list-item">
                  Marketing Director @ SFU Surge
                </li>
                <li className="work__list-item">Graphic Design Lead @ YMHA</li>
                <li className="work__list-item">
                  Marketing Apprentice @ The Forum
                </li>
                <li className="work__list-item">
                  Web + Graphic Design Intern @ DSBIA
                </li>
              </ul>
            </div>
          </div>
          <Hackathons></Hackathons>
        </div>
      </section>

      <section className="after-hours">
        <div className="after-hours__container">
          <div className="after-hours__titles">
            <p className="after-hours__header">After Hours</p>
            <p className="after-hours__subheader">you can find me...</p>
          </div>
          <div className="after-hours__grid">
            <Activity
              title="Improving my hand-eye coordination."
              desc="You can catch me trying my best at League of Legends, surviving the night in Don’t Starve Together, or putting the finishing touches on my Animal Crossing island."
            ></Activity>
            <Activity
              title="Sticking my nose in a book."
              desc="For screen breaks, I’m typically reading something from my book collection for fun, or flipping through a design book for reference."
            ></Activity>

            <Activity
              title="Staying connected through online communities."
              desc="Whether it be learning from people at Vancouver Design Check-in, or moderating the community personal development community for Lavendaire, I’m always trying to frequent spaces that inspire me."
            ></Activity>
            <Activity
              title="Walking slower then the average person."
              desc="When outside, I’m often walking my senior dog Benji around a soccer field, or not walking fast enough to keep up with friends."
            ></Activity>
          </div>
        </div>
      </section>

      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}

export default about;
