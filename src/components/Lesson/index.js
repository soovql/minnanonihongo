import React from "react";
import styled from "styled-components";
import BackButton from "../buttons/BackButton";

export default function({ match }) {
  const Title = styled.h2``;

  const Navigation = styled.div``;

  return (
    <React.Fragment>
      <BackButton to="/">Назад</BackButton>
      <Title>第{match.params.id}課</Title>
    </React.Fragment>
  );
}
