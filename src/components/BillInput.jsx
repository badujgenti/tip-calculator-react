import styled from "styled-components";
import dollar from "../images/icon-dollar.svg";

const BillInput = () => {
  return (
    <InputDiv>
      <img src={dollar} alt="dollar svg" />
      <Input type="text" placeholder="0" />
    </InputDiv>
  );
};

export default BillInput;

const InputDiv = styled.div`
  background-color: #fffafa;
  height: 48px;
  width: 311px;
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 10px;
`;

const Input = styled.input`
  background-color: #fffafa;
  height: 44px;
  width: 270px;
  border-radius: 5px;
  text-align: right;
  border: none;
`;
