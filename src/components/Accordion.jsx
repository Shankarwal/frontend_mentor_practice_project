import styled from "styled-components";
import { questions } from "../data";
import SingleQuestion from "./SingleQuestion";

const Accordion = () => {
  return (
    <Wrapper>
      <h3>questions and answers about login</h3>
      <section className="info">
        {questions.map(({ id, ...rest }) => {
          return <SingleQuestion key={id} {...rest} />;
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 90rem;
  height: auto;
  min-height: 20rem;
  background: #fff;
  border-radius: 4px;
  padding: 4.8rem 3.2rem;
  display: grid;
  grid-template-columns: 17rem auto;
  grid-gap: 1rem 2rem;
  column-gap: 6.4rem;
  box-shadow: 2px 2px 2px rgba(250, 250, 250, 0.15);
  h3 {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1.5;
    text-transform: capitalize;
    letter-spacing: 0.02rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
  @media (max-width: 800px) {
    grid-template-columns: none;
    grid-template-rows: 6rem auto;
    h3 {
      font-size: 2rem;
    }
  }
`;

export default Accordion;
