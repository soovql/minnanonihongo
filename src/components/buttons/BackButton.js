import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  background-color: ${({ white }) => (white ? "#FFCCDF" : "#FFC3DA")};
  padding: 10px 15px;
  outline: none;
  border-radius: 100px;
  color: ${({ white }) => (white ? "#fff" : "#fff")};
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin: -20px 20px 10px;
  width: 30%;
  max-width: 100px;
  &:hover {
    background-color: #fff0f7;
    color: #000;
  }
`;
