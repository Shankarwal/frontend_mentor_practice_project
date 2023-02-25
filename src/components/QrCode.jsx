import styled from "styled-components";

const QrCode = () => {
  return (
    <Wrapper>
      <article className="code-box">
        <div className="img-container">
          <img src="/images/qr-code.png" alt="qr-code" />
        </div>
        <div className="about">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your front-end
            skills to the next level
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
    max-width: 30rem;
    height: auto;
    padding: 2.4rem;
    background: var(--White);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .img-container img {
      width: 100%;
      border-radius: 1.2rem;
    }
  }
  .about {
    h2 {
      font-size: 2rem;
      margin-bottom: 1.4rem;
      color: var(--Dark-blue);
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--Grayish-blue);
    }
  }
  @media (max-width: 324px) {
    .about {
      h2 {
        font-size: 1.7rem;
        margin-bottom: 1.6rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default QrCode;
