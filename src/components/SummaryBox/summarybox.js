import "./summarybox.scss";
import SummaryItem from "../SummaryItem/summaryitem";
import bookIcon from "../../assets/bookicon.svg";
import pinIcon from "../../assets/pinicon.svg";
import pencilIcon from "../../assets/pencilicon.svg";

function SummaryBox() {
  return (
    <>
      <div className="summary-box">
        <div className="summary-box__container">
          <p className="summary-box__title">tl;dr</p>
          <div className="summary-box__items">
            <SummaryItem
              icon={bookIcon}
              title="Previously"
              desc="Leading volunteer teams through marketing + content strategy for online events. "
            />
            <SummaryItem
              icon={pinIcon}
              title="Most Recently"
              desc="Executing on all things design and website implementation over at Guusto ↗."
            />
            <SummaryItem
              icon={pencilIcon}
              title="What's Next?"
              desc="Staying fascinated by what design + development can do, and learning as much as I can in the process."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryBox;
