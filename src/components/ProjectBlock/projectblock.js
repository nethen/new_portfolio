import "./projectblock.scss";

function ProjectBlock(props) {
  return (
    <>
      <div className="project">
        <div
          className="project__img-container"
          style={{ backgroundColor: props.bgcolor }}
        >
          <img src={props.img} className="project__logo" />
        </div>
        <div className="project__info">
          <h2 className="project__title">{props.title}</h2>
          <p className="project__desc">{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectBlock;
