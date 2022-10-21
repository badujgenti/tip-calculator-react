import styled from "styled-components";
import food from "../images/food.jpeg";

const TipButton = ({ tip, onClick }) => {
  return (
    <Tip onClick={onClick} value={tip}>
      {" "}
      {tip} %{" "}
    </Tip>
  );
};

export default TipButton;

const Tip = styled.button`
  height: 48px;
  width: 146.6311798095703px;
  border: 1p solid black;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-image: url(${food});
  }
  @media (min-width: 768px) {
    width: 186px;
  }
`;
