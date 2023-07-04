import "./home.scss";
import Navbar from "../../components/Navbar/navbar";
import TopParagrah from "../../components/TopParagraph/TopParagraph";
import ProjectBlock from "../../components/ProjectBlock/projectblock";
import Footer from "../../components/Footer/Footer";

import guustologo from "../../assets/guusto.svg";
import boxpalslogo from "../../assets/boxpals.svg";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <TopParagrah></TopParagrah>
      <section className="projects-box">
        <div className="projects-box__container">
          <ProjectBlock
            img={guustologo}
            title="Reimagining what employee recognition looks like"
            desc="Design @ Guusto"
            bgcolor="#22315c"
          ></ProjectBlock>
          <ProjectBlock
            img={boxpalslogo}
            title="Helping individuals save money through group order management"
            desc="Development @ Brainstaiton"
            bgcolor="#004921"
          ></ProjectBlock>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;
