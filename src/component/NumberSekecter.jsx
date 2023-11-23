import React from "react";
import { styled } from "styled-components";
const NumberSekecter = ({
  selectedNumber,
  setSelectedNumber,
  error,
  seterror,
}) => {
  const numberSelecterHandler = (value) => {
    setSelectedNumber(value);
    seterror("");
  };

  const arrayNum = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNum.map((value, i) => {
          return (
            <Box
              isselected={value === selectedNumber}
              key={i}
              onClick={() => numberSelecterHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSekecter;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .error {
    color: red;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
