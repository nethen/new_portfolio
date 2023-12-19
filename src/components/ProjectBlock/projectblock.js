import "./projectblock.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ProjectBlock(props) {
  const [hovered, setHovered] = useState(false);

  const mouseEnter = (e) => {
    setHovered(true);
  };

  const mouseLeave = (e) => {
    setHovered(false);
  };

  const variants = {
    hover: {
      opacity: 1,
    },
    rest: {
      opacity: 0,
    }
  }

  const variantsNot = {
    hover: {
      opacity: 0,
    },
    rest: {
      opacity: 1,
    }
  }

  const style = hovered ? { color: "#4069cc" } : {};

  return (
    <>
      <motion.div
        // onHoverStart={e => {setHovered(true)}}
        // onHoverEnd={e => {setHovered(false)}}
        initial={false}
        whileHover="hover"
        animate="rest"
        className="project"
      >
        <p style={{ color: "black" }}>{hovered.value} PARAGRAPH</p>

        <div
          className={"project__img-container"}
          style={{ backgroundColor: props.bgcolor }}
        >
          <AnimatePresence initial={false}>
              <motion.img
                variants={variants}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                key="hover"
                src={props.img}
                className={"project__logo--absolute"}
              />
              <motion.img
                variants={variantsNot}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                key="default"
                src={props.hoverimg}
                className={"project__logo"}
              />
          </AnimatePresence>
        </div>
        <div className="project__info">
          <h2 className="project__title" style={style}>
            {props.title}
          </h2>
          <p className="project__desc">{props.desc}</p>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectBlock;
