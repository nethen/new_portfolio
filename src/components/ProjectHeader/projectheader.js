import "./projectheader.scss";
import boxpalslogo from "../../assets/boxpals.svg";
import backarrow from "../../assets/backarrow.svg";

function projectHeader() {
  return (
    <>
      <section className="p__header">
        <div className="p__arrow-div">
          <img src={backarrow} className="p__arrow" />
        </div>

        <div className="p__logo-div">
          <img src={boxpalslogo} className="p__logo" />
        </div>
      </section>
    </>
  );
}

export default projectHeader;
