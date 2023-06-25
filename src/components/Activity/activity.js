import "./activity.scss";

function Activity(props) {
  return (
    <>
      <div className="activity">
        <p className="activty__title">{props.title}</p>
        <p className="activity__desc">{props.desc}</p>
      </div>
    </>
  );
}

export default Activity;
