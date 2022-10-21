import styled from "styled-components";
import Card from "./components/Card";
import food from "./images/food.jpeg";

// import logo from "./images/logo.svg"

function App() {
  return (
    <FullDiv >
      {/* <img style={{marginBottom:"40px", marginTop:"50px"}} src={logo}/> */}
     

     <Card/>
     
    </FullDiv>
  );
}

export default App;


const FullDiv = styled.div`
 background-image: url(${food}) ;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`


