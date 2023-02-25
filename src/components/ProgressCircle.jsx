import { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProgressCircle = () => {
  const inputRef = useRef(null);
  const [val, setVal] = useState(0);

  const handleChange = () => {
    setVal(inputRef.current.value);
  };

  return (
    <Wrapper>
      <motion.svg>
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          //   pathLength={val}
          //   strokeDashoffset={val}
          //   strokeDasharray={val}
          className="bg"
        />
        <motion.circle
          layout
          cx="50"
          cy="50"
          r="30"
          initial={{ pathLength: 0, rotate: "-90deg" }}
          animate={{ pathLength: val / 100 }}
          className="indicator"
        />
      </motion.svg>
      <div className="controller">
        <input
          type="range"
          min="0"
          max="100"
          ref={inputRef}
          value={val}
          onChange={handleChange}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  svg {
    width: 10rem;
    height: 10rem;
  }
  circle {
    /* stroke-dashoffset: 0; */
    fill: none;
    stroke-width: 10%;
  }
  .bg {
    stroke: #4dabf7;
    opacity: 0.3;
  }
  .indicator {
    stroke: #4dabf7;
  }
`;

export default ProgressCircle;
