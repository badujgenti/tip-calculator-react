import styled from "styled-components";
import food from "../images/food.jpeg";

const TotalCard = ({ bill, people, tipp, resetAll }) => {
  const total = Number(bill + (bill * tipp) / people).toFixed(2);
  const tip = Number((bill * tipp) / people).toFixed(2);

  console.log(tip);
  return (
    <Total>
      <Tots>
        <p>Tip amount/person</p>
        <p> $ {bill && people && tipp ? tip : "0.00"}</p>
      </Tots>
      <Tots>
        <p>Total/person</p>
        <p>$ {bill && people && tipp ? total : "0.00"}</p>
      </Tots>

      <Reset onClick={resetAll}> RESET </Reset>
    </Total>
  );
};

export default TotalCard;

const Total = styled.div`
  height: 257px;
  width: 327px;
  left: 24px;
  top: 644px;
  border-radius: 15px;
  border: 1px solid black;
  margin-top: 15px;
  padding: 20px;
  column-gap: 20px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 768px) {
    height: 300px;
    width: 327px;
    border-radius: 15px;
    padding: 30px;
    margin-top: 80px;
  }
`;

const Reset = styled.button`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-image: url(${food});
  }
`;

const Tots = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
