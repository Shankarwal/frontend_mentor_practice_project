import { motion } from "framer-motion";
import classes from "./RatingChoose.module.css";
import star from "/images/icon-star.svg";

const stars = [1, 2, 3, 4, 5];

const RatingChoose = ({ handleClick, selected, setSelected, variant }) => {
  const starHandler = (id) => {
    setSelected(id);
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.rat_Choose}
    >
      <div className={classes.star}>
        <img src={star} alt="top star logo" />
      </div>
      <div className={classes.text_box}>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All the
          feedback is appreciated to help us improve our offerings!
        </p>
      </div>
      <ul className={classes.list}>
        {stars.map((str) => {
          return (
            <li
              key={str}
              className={
                selected === str
                  ? `${classes.list_item} ${classes.active}`
                  : classes.list_item
              }
              onClick={() => starHandler(str)}
            >
              {str}
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className={classes.rat_btn}
        onClick={handleClick}
        disabled={selected === 0}
      >
        submit
      </button>
    </motion.div>
  );
};

export default RatingChoose;
