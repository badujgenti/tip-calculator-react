import styled from "styled-components";
import dollar from "../images/icon-dollar.svg";
import { useState, useEffect } from "react";

const BillInput = ({ bill, onChange }) => {
  return (
    <InputDiv>
      <img src={dollar} alt="dollar svg" />
      <Input onChange={onChange} type="number" placeholder="0" value={bill} />
    </InputDiv>
  );
};

export default BillInput;

const InputDiv = styled.div`
  background-color: white;
  height: 48px;
  width: 311px;
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 10px;
  @media (min-width: 768px) {
    width: 379px;
  }
`;

const Input = styled.input`
  background-color: white;
  height: 35px;
  width: 270px;
  border-radius: 5px;
  text-align: right;
  border: none;
  outline: none;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  @media (min-width: 768px) {
    width: 338px;
  }
`;
