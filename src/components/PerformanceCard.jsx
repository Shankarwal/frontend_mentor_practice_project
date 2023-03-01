import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PerformanceCard = () => {
  let [stats, setStats] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("../data.json");
    setStats(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper className="grid-2-cols">
      <div className="score">
        <div className="circle" />
        <div className="score-text">
          <p className="res">Your Result</p>
          <div className="score-value">
            <span>76</span>
            <p>of 100</p>
          </div>
          <div className="text">
            <span>Great</span>
            <p>
              You scored higher than 65% of the people who have taken these
              tests
            </p>
          </div>
        </div>
      </div>
      <div className="performance">
        <h2>Summary</h2>
        <ul className="list">
          {stats
            ? stats?.map(({ category, score, icon }) => {
                return (
                  <li key={category} className="list-item">
                    <p className="cat">
                      <img src={icon} alt={`${category}-${score}`} />
                      <span>{category}</span>
                    </p>
                    <span className="out-of">
                      <strong>{score}</strong> / 100
                    </span>
                  </li>
                );
              })
            : null}
        </ul>
        <button className="card-btn">continue</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 51rem;
  /* max-width: 50rem; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  row-gap: 3.2rem;
  column-gap: 3.2rem;
  border-radius: 2.5rem;
  box-shadow: 0 0.5rem 1.5rem hsla(0, 0%, 0%, 0.15);
  background: #fafafa;
  .score {
    /* width: 20rem; */
    /* height: 33.5rem; */
    border-radius: 2.5rem;
    background-image: linear-gradient(
      to bottom,
      hsl(252, 100%, 67%),
      hsl(241, 81%, 54%)
    );
    position: relative;
    .score-text {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      width: 70%;
      display: grid;
      grid-template-rows: 6rem auto 1fr;
      /* flex-direction: column;
      justify-content: center;
      align-items: center; */
      /* justify-content: space-between; */
      row-gap: 2.4rem;
      padding: 2rem 0;
      text-align: center;
      .res {
        font-size: 1.8rem;
        color: hsl(241, 100%, 85%);
        /* margin-bottom: 5rem; */
      }
      .score-value {
        line-height: 1;
        span {
          display: inline-block;
          margin-bottom: 1rem;
          font-size: 4.6rem;
          font-weight: 600;
          color: #fff;
        }
        p {
          color: hsl(241, 100%, 80%);
          font-size: 1.3rem;
        }
      }
      .text {
        align-self: center;
        span {
          display: inline-block;
          font-size: 2rem;
          color: #fff;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.2rem;
          color: hsl(241, 100%, 85%);
        }
        /* text-align: center; */
      }
    }
  }
  .performance {
    padding: 2.4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    margin-right: 3.2rem;
    h2 {
      font-size: 1.6rem;
    }
    button {
      text-transform: capitalize;
      padding: 1.2rem;
      border: none;
      border-radius: 3rem;
      color: hsl(0, 0%, 100%);
      /* color: hsl(241, 100%, 89%); */
      background: hsl(224, 30%, 27%);
      cursor: pointer;
      transition: background 0.3s ease-in-out;
      &:hover {
        background: hsl(241, 100%, 20%);
      }
    }
  }
  .circle {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13rem;
    height: 13rem;
    border-radius: 50%;

    background-image: linear-gradient(
      to bottom,
      hsla(256, 72%, 46%, 1),
      hsla(241, 72%, 46%, 0)
    );
  }
  .list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2rem;
      background: #b39898;
      border-radius: 0.6rem;

      .cat {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 1rem;
        img {
          width: 1.5rem;
          aspect-ratio: 1/1;
        }
        span {
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
      &:nth-child(1) {
        background: hsl(0, 100%, 96%);
        .cat span {
          color: hsl(0, 100%, 60%);
        }
      }
      &:nth-child(2) {
        background: hsl(39, 100%, 96%);
        .cat span {
          color: hsl(39, 100%, 50%);
        }
      }
      &:nth-child(3) {
        background: hsl(166, 100%, 96%);
        .cat span {
          color: hsl(166, 100%, 32%);
        }
      }
      &:nth-child(4) {
        background: hsl(234, 85%, 96%);
        .cat span {
          color: hsl(234, 85%, 40%);
        }
      }
      .out-of {
        color: hsl(0, 0%, 65%);
        font-size: 1.1rem;
        font-weight: 700;
        strong {
          font-size: 1.2rem;
          color: hsl(0, 0%, 42%);
        }
      }
    }
  }
  @media (max-width: 324px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100vh;
    /* background: #fff; */
    border-radius: 0;
    transform: translateY(-12rem);
    box-shadow: none;
    /* grid-template-rows: 1fr 1fr; */
    .score {
      height: 45rem;
      width: 100%;
      .score-text {
        top: 30%;
        height: 72%;
        max-width: 22rem;
      }
    }
    .circle {
      top: 60%;
    }
    .performance {
      padding: 0 3.2rem 3.2rem;
      margin-right: 0;
      margin-bottom: 3.2rem;
      .list {
        .list-item {
          padding: 1.6rem 1.2rem;
          .cat span {
            font-size: 1.5rem;
          }
          .out-of {
            font-size: 1.4rem;
            font-weight: 700;
            strong {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
`;
export default PerformanceCard;
