import styled from "styled-components";

const TotalCard = () => {
  return (
    <Total>
      <Tots>
        <p>Tip amount/person</p>
        <p> $ {}</p>
      </Tots>
      <Tots>
        <p>Total/person</p>
        <p>$ {}</p>
      </Tots>

      <Reset />
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
`;

const Reset = styled.button``;

const Tots = styled.div`
  display: flex;
  justify-content: space-around;
`;
