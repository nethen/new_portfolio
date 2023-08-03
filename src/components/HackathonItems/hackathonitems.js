import "./hackathonitems.scss";
import medal from "../../assets/medal.svg";

function HackathonItems(props) {
  return (
    <>
      <div className="hackathon-item">
        <div className="hackathon-item__main">
          <p className="hackathon-item__name">{props.name}</p>
          <img
            src={medal}
            style={{ display: props.award ? "inline-block" : "none" }}
            className="hackathon-item__icon"
          />
        </div>
        <p className="hackathon-item__date">{props.date}</p>
      </div>
    </>
  );
}

export default HackathonItems;
