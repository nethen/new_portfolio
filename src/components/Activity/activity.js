import "./activity.scss";

function Activity(props) {
  return (
    <>
      <div className="activity">
        <p className="activity__title">{props.title}</p>
        <p className="activity__info">{props.desc}</p>
      </div>
    </>
  );
}

export default Activity;
