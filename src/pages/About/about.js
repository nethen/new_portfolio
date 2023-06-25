import "./about.scss";
import Navbar from "../../components/Navbar/navbar";
import mePhoto from "../../assets/me.png";
import SummaryBox from "../../components/SummaryBox/summarybox";
import Hackathons from "../../components/Hackathons/hackathons";
import Activity from "../../components/Activity/activity";
function about() {
  return (
    <>
      <Navbar></Navbar>

      <section className="about__top">
        <img src={mePhoto} className="about__photo" />
        <div className="about__top-content">
          <h1 className="about__header">Hi again, I’m Michelle! </h1>
          <p className="about__desc">
            Beyond Product Design, I’m a maker that enjoys taking things from 0
            to 1.
          </p>
        </div>
      </section>

      <SummaryBox></SummaryBox>

      <h2 className="about__h2">Work</h2>
      <section className="professional-stuff">
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
            <li className="work__list-item">Marketing Director @ SFU Surge</li>
            <li className="work__list-item">Graphic Design Lead @ YMHA</li>
            <li className="work__list-item">
              Marketing Apprentice @ The Forum
            </li>
            <li className="work__list-item">
              Web + Graphic Design Intern @ DSBIA
            </li>
          </ul>
        </div>
        <Hackathons></Hackathons>
      </section>

      <section className="after-hours">
        <p className="after-hours__header">After Hours</p>
        <p className="after-hours__subheader">you can find me...</p>
        <Activity
          title="Improving my hand-eye coordination."
          desc="You can catch me trying my best at League of Legends, surviving the night in Don’t Starve Together, or putting the finishing touches on my Animal Crossing island."
        ></Activity>
      </section>
    </>
  );
}

export default about;
