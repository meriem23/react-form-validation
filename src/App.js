import styled from "styled-components";
import "./App.css";
import List from "./List";
import { Link } from "react-router-dom";
import { Container, rotate } from "./styled";
import Form from "./Form";
function App() {
  // const Link = styled.a.attrs((props) => ({
  //   target: "_blank",
  // }))`
  //   color: violet;
  //   font-size: 1.5rem;
  //   display: flex;
  //   color: ${(props) => props.theme.colors.link};
  // `;
  // const Title = styled.h1`
  //   font-size: 1.5em;
  //   text-align: center;
  //   color: ${(props) => props.theme.colors.main};
  // `;
  // const Button = styled.button`
  //   font-size: 1em;
  //   margin: 1em;
  //   padding: 0.25em 1em;
  //   border: 2px solid palevioletred;
  //   background: palevioletred;
  //   border-radius: 3px;
  //   color: ${(props) => props.theme.colors.lighter};
  //   @media: ${({ theme }) => theme.mediaQueries["bellow_768"]} {
  //     font-size: 0.4rem;
  //     background-color: blue;
  //   } ;
  // `;
  // const OtherButton = styled(Button)`
  //   border: 2px solid red;
  //   background: red;
  //   animation: ${rotate} 2s linear infinite;
  // `;
  const Wrapper = styled.div`
    padding: 4em;
    background: papayawhip;
  `;
  // const Input = styled.input`
  //   width: 30%;
  //   padding: 0.25em 1em;
  //   margin: 1em;
  //   border: 2px solid palevioletred;
  // `;
  // const Form = styled.form`
  //   text-align: center;
  // `;
  // // const StyledLink = styled(Link)`
  // //   font-size: 2.5em;
  // //   text-decoration: none;
  // //   color: gray;
  // // `;
  // const PaginationWrapper = styled.div`
  //   display: flex;
  //   width: 100%;
  //   justify-content: ${({ page }) => {
  //     if (page === "first") return "flex-end;";
  //     else if (page === "middle") return "space-between";
  //     else return "flex-start";
  //   }};
  // `;
  return (
    <div className="App-header">
      <Form />
    </div>
  );
}

export default App;
