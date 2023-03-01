import { motion } from "framer-motion";
import classes from "./RatingThanks.module.css";
import thanks from "/images/illustration-thank-you.svg";

const RatingThanks = ({ variant, selected }) => {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.thanks}
    >
      <div className={classes.img_container}>
        <img src={thanks} alt="thank you!!" className={classes.thanks_img} />
        <p>You selected {selected} out of 5</p>
      </div>
      <div className={classes.text_box}>
        <h1>Thank You!</h1>
        <p>
          We appreciate you taking the time to give rating. If you ever need
          support don't hesitate toget in touch
        </p>
      </div>
    </motion.div>
  );
};

export default RatingThanks;
