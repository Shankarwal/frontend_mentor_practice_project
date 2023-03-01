import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import RatingChoose from "./RatingChoose";
import RatingThanks from "./RatingThanks";
import classes from "./Rating.module.css";

const variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      durtion: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      durtion: 0.4,
    },
  },
};

const Rating = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    console.log(selected);
    setSubmitted(true);
  };

  return (
    <div className={classes.main}>
      <section className="container">
        <article className={classes.card}>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <RatingChoose
                handleClick={handleClick}
                selected={selected}
                setSelected={setSelected}
                variant={variant}
              />
            ) : (
              <RatingThanks variant={variant} selected={selected} />
            )}
          </AnimatePresence>
        </article>
      </section>
    </div>
  );
};

export default Rating;
