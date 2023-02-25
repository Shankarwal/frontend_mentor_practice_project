import styled from "styled-components";

const QrCode = () => {
  return (
    <Wrapper>
      <article className="code-box">
        <div className="img-container">
          <img src="/images/qr-code.png" />
        </div>
        <div className="about">
          <h2>improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your front-end
            skills to next level
          </p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--Light-gray);
  display: grid;
  place-items: center;
  .code-box {
    text-align: center;
    width: 85vw;
    max-width: 40rem;
    height: auto;
    padding: 2.4rem;
    background: var(--White);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .img-container img {
      /* width: 30rem;
      height: 30rem; */
      width: 100%;
      border-radius: 1.2rem;
    }
  }
  .about {
    h2 {
      font-size: 2rem;
      letter-spacing: 0.15rem;
      margin-bottom: 1.6rem;
    }
    p {
      font-size: 1.6rem;
      letter-spacing: 0.1rem;
      font-weight: 400;
      opacity: 0.7;
    }
  }
  @media (max-width: 1440px) {
    .code-box {
      max-width: 36rem;
    }
    .about {
      h2 {
        font-size: 2rem;
        letter-spacing: 0.1rem;
        margin-bottom: 1.6rem;
      }
      p {
        font-size: 2rem;
        letter-spacing: 0.1rem;
        font-weight: 400;
        opacity: 0.7;
        margin-bottom: 2.4rem;
      }
    }
  }
`;

export default QrCode;
