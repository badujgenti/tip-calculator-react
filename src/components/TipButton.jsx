import styled from "styled-components";

const TipButton = ({ tip }) => {
  return <Tip> {tip} % </Tip>;
};

export default TipButton;

const Tip = styled.button`
  height: 48px;
  width: 146.6311798095703px;
  border: 1p solid black;
  border-radius: 5px;
`;
