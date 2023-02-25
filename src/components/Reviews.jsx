import { users } from "../data";
import { FaQuoteRight, FaLessThan, FaGreaterThan } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = users[index];

  const showPrev = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) return users.length - 1;
      return newIndex;
    });
  };

  const showNext = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > users.length - 1) return 0;
      return newIndex;
    });
  };

  const surprise = () => {
    let randomIndex = Math.floor(Math.random() * users.length);
    setIndex((prevIndex) => {
      if (prevIndex === randomIndex) showNext;
      return randomIndex;
    });
  };

  return (
    <Wrapper>
      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
      <article className="review">
        <div className="img-container">
          <AnimatePresence mode="wait">
            <motion.img
              src={image}
              alt={name}
              className="person-img"
              key={index}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="control" onClick={showPrev}>
            <FaLessThan />
          </button>
          <button className="control" onClick={showNext}>
            <FaGreaterThan />
          </button>
        </div>
        <button className="random-btn" onClick={surprise}>
          surprise me
        </button>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80vw;
  max-width: 64rem;
  height: 100vh;
  text-align: center;
  padding: 4.8rem 0;
  .title {
    margin-bottom: 6.4rem;
    h2 {
      font-size: 3.6rem;
      text-transform: capitalize;
      font-weight: 500;
      margin-bottom: 1.6rem;
    }
    .underline {
      width: 10rem;
      height: 4px;
      background: var(--bg-blue);
      margin: 0 auto;
    }
  }
  .review {
    background: var(--bg-white);
    padding: 2.4rem 3.2rem;
    border-radius: var(--radius-ten);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
    .quote-icon,
    .img-container::before {
      position: absolute;
      background: #4dabf7;
      border-radius: var(--radius-half);
    }
    .img-container::before {
      content: "";
      top: -0.3rem;
      right: -0.5rem;
      width: 100%;
      height: 100%;
    }
    .img-container {
      width: 15rem;
      height: 15rem;
      margin: 0 auto 2.4rem;
      position: relative;
      .person-img {
        display: block;
        width: 100%;
        border-radius: var(--radius-half);
        object-fit: cover;
        position: relative;
      }
      .quote-icon {
        top: 1rem;
        left: 0;
        width: 3.4rem;
        height: 3.4rem;
        font-size: 1.6rem;
        display: grid;
        place-items: center;
        color: #fff;
      }
    }
    .author {
      text-transform: capitalize;
      font-size: 1.6rem;
      font-weight: 600;
      color: #000;
      margin-bottom: 0.6rem;
    }
    .job {
      text-transform: uppercase;
      color: var(--bg-blue);
      font-size: 1.4rem;
      margin-bottom: 1.2rem;
    }
    .info {
      font-size: 1.2rem;
      line-height: 1.8;
      font-weight: 500;
      /* letter-spacing: 0.1rem; */
      margin-bottom: 1.6rem;
      color: #2b6ea5;
    }
    @media (min-width: 800px) {
      .info {
        font-size: 1.4rem;
      }
    }
    .button-container {
      margin-bottom: 1.6rem;
      display: flex;
      justify-content: center;
      gap: 2rem;
    }
    .control {
      border: none;
      background: transparent;
      opacity: 0.7;
      transition: all 0.3s ease-in-out;
      svg {
        font-size: 2rem;
        fill: #339af0;
        color: #339af0;
        outline: none;
      }
    }
    .control:hover {
      opacity: 1;
    }
    .random-btn {
      text-transform: capitalize;
      border: none;
      background: #ebf0f5;
      color: #4dabf7;
      padding: 0.8rem;
      border-radius: var(--radius-five);
      transition: all 0.3s ease-in-out;
    }
    .random-btn:hover {
      background: #339af0;
      color: #111;
    }
  }
`;

export default Reviews;
