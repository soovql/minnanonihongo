import React from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";

export default function({}) {
  // getData = () => {
  //   const { match } = this.props;
  //   const hostname = "https://twitter-demo.erodionov.ru";
  //   const env = ((process.env: any): { [string]: string });
  //   const secretCode = env.REACT_APP_SECRET_CODE;
  //   fetch(
  //     `${hostname}/api/v1/accounts/${
  //       match.params.id
  //     }?access_token=${secretCode}`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ userData: data });
  //     });
  // };

  const Card = styled(Link)`
    background-color: #ffa6c8;
    color: #000;
    font-weight: bold;
    display: block;
    padding: 30px;
    height: auto;
    text-align: center;
    border-radius: 15px;
    margin: 3%;
    text-transform: uppercase;
    text-decoration: none;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    &:hover {
      background: #fff0f7;
    }
  `;

  const Wrap = styled.div`
    display: block;
    margin: 0 auto;
    width: 60%;
    height: 100%;
  `;

  return (
    <Wrap>
      <Grid>
        <Row>
          <Col sm={4}>
            <Card to="/lesson/1">Урок 1</Card>
          </Col>
          <Col sm={4}>
            <Card to="/lesson/2">Урок 2</Card>
          </Col>
          <Col sm={4}>
            <Card to="/lesson/3">Урок 3</Card>
          </Col>
          <Col sm={4}>
            <Card to="/lesson/4">Урок 4</Card>
          </Col>
          <Col sm={4}>
            <Card to="/lesson/5">Урок 5</Card>
          </Col>
          <Col sm={4}>
            <Card to="/lesson/6">Урок 6</Card>
          </Col>
          <Col sm={4}>
            <Card to="/kanji">Все канзи</Card>
          </Col>
        </Row>
      </Grid>
    </Wrap>
  );
}
