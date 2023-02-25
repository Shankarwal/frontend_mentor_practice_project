import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Wrapper>
      <header>
        <h4>{title}</h4>
        <div>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
      </header>
      {showInfo ? <p>{info}</p> : null}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1.6rem;
  box-shadow: var(--shadow-light);
  display: flex;
  flex-direction: column;
  /* justify-content: stretch; */
  gap: 2rem;
  transition: all 0.3 ease-in-out;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 1rem; */
    h4 {
      font-size: 1.4rem;
      /* font-weight: 600; */
      letter-spacing: 0.1rem;
    }
    .btn {
      border: transparent;
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #c74848;
    }
  }
  p {
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: 0.1rem;
  }
`;

export default SingleQuestion;
