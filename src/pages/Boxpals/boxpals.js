import "./boxpals.scss";
import ProjectHeader from "../../components/ProjectHeader/projectheader";

function Boxpals() {
  return (
    <>
      <ProjectHeader />
      <div className="content">
        <div className="content__box">
          <p className="content__summary">
            Boxpals is a group order management solution that allows people in
            the same locale to benefit from the economic and environmental
            benefits of ordering from retailers together (as opposed to
            individually).
          </p>

          <div className="content__bg">
            <iframe
              src="https://www.youtube.com/embed/qaVvrXjcfbc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="bullets">
            <div className="bullets__box">
              <p className="bullets__heading">Created</p>
              <p className="bullets__text">January - March 2023</p>
            </div>

            <div className="bullets__box">
              <p className="bullets__heading">Tools</p>
              <ul className="bullets__list">
                <li className="bullets__text">Figma + Figjam</li>
                <li className="bullets__text">Visual Studio Code</li>
              </ul>
            </div>

            <div className="bullets__box">
              <p className="bullets__heading">For</p>
              <p className="bullets__text">
                BrainStation web development program
              </p>
            </div>
          </div>

          <div className="content__group">
            <p className="content__section-heading">Results</p>
            <p className="content__body">
              As this project was course work, the product remains hypothetical.
              However, the project exceeded expectations by receiving a grade of
              98% and was well received by both the teaching team and the public
              at BrainStation’s quarterly demo day.
            </p>
          </div>

          <div className="content__group">
            <p className="content__section-heading">Context</p>
            <p className="content__body">
              Boxpals was created as the final project for BrainStation’s
              part-time web development program. The primary goal of the project
              is to showcase learnings from the program in a solo self-directed
              side project that was to be completed in addition to regular
              course work.
            </p>
          </div>

          <div className="content__group">
            <p className="content__section-heading">Process</p>
            <p className="content__body">
              With
              <a
                className="content__inline-link"
                href="https://www.retaildive.com/news/study-one-third-of-discretionary-income-is-now-spent-online/540920/"
              >
                “one third of consumer’s monthly discretionary income [now
                being] spent online,”
              </a>
              probably including my own, I decided to delve into research about
              online shopping by reflecting on my own habits, and secondary
              sources.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boxpals;
