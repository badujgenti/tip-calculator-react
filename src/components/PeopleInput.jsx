import styled from "styled-components";
import person from "../images/icon-person.svg";

const PeopleInput = () => {
  return (
    <InputDiv>
      <img src={person} alt="person svg" />
      <Input type="text" placeholder="0" />
    </InputDiv>
  );
};

export default PeopleInput;

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
