import { useEffect, useState } from "react";
import styled from "styled-components";
import BillInput from "./BillInput";
import PeopleInput from "./PeopleInput";
import TipButton from "./TipButton";
import TotalCard from "./Total";
import food from "../images/food.jpeg";

const Card = () => {
  const tips = [5, 10, 15, 25, 50];
  const [people, setPeople] = useState("");
  const [bill, setBill] = useState("");
  const [tipp, setTipp] = useState("");

  const resetAll = () => {
    setBill("");
    setPeople("");
    setTipp("");
  };

  const HandleChange = (e) => {
    setBill(e.target.valueAsNumber);
  };

  const PeopleChange = (e) => {
    setPeople(e.target.valueAsNumber);
  };

  const TipChange = (e) => {
    setTipp(e.target.value / 100);
  };
  const CustomChange = (e) => {
    setTipp(e.target.valueAsNumber / 100);
  };

  return (
    <WhiteCard>
      <Leftside>
        <Splitter> SPLITTER </Splitter>
        Bill
        <BillInput onChange={HandleChange} bill={bill} />
        Select Tip :
        <TipDiv>
          {tips.map((tip) => {
            return <TipButton onClick={TipChange} tip={tip} key={tip} />;
          })}
          <Custom
            onChange={CustomChange}
            type="number"
            placeholder="Custom..."
          />
        </TipDiv>
        <People>
          {" "}
          Number of People :
          <PeopleInput onChange={PeopleChange} people={people} />
        </People>
      </Leftside>
      <TotalCard bill={bill} people={people} tipp={tipp} resetAll={resetAll} />
    </WhiteCard>
  );
};

export default Card;

const WhiteCard = styled.div`
  width: 375px;

  background: #ffffff;
  box-shadow: 0 0 60px rgba(115, 126, 126, 2);
  border-radius: 25px 25px 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
  @media (min-width: 768px) {
    height: 481px;
    width: 920px;
    left: 260px;
    top: 304px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 100px;
  }
`;

const Custom = styled.input`
  height: 48px;
  width: 146px;
  border: 1p solid black;
  border-radius: 5px;
  text-align: right;
  padding: 10px;
  outline: none;
  cursor: pointer;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &:hover {
    background-image: url(${food});
  }
  @media (min-width: 768px) {
    width: 186px;

    padding-right: 45px;
  }
`;

const TipDiv = styled.div`
  @media (min-width: 768px) {
    height: 78px;
    width: 379px;
  }
`;

const Splitter = styled.h1`
  margin-left: 100px;
`;

const Leftside = styled.div`
  @media (min-width: 768px) {
    width: 379px;
    display: flex;
    flex-direction: column;
  }
`;

const People = styled.h1`
  @media (min-width: 768px) {
    margin-top: 68px;
  }
`;
