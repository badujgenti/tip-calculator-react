import styled from "styled-components";
import BillInput from "./BillInput";
import PeopleInput from "./PeopleInput";
import TipButton from "./TipButton";
import TotalCard from "./Total";

const Card = () => {
  const tips = [5, 10, 15, 25, 50];
  return (
    <WhiteCard>
      Bill
      <BillInput />
      Select Tip :
      <TipDiv>
        {tips.map((tip) => {
          return <TipButton tip={tip} />;
        })}
        <Custom type="number" placeholder="Custom..." />
      </TipDiv>
      Number of People :
      <PeopleInput />
      <TotalCard />
    </WhiteCard>
  );
};

export default Card;

const WhiteCard = styled.div`
  width: 375px;

  background: #ffffff;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px 25px 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
`;

const Custom = styled.input`
  height: 48px;
  width: 146.6311798095703px;
  border: 1p solid black;
  border-radius: 5px;
  text-align: right;
  padding: 10px;
`;

const TipDiv = styled.div``;
