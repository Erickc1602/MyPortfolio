import React from "react";
import styled from "styled-components";

const MyProjects = () => {
  const Container = styled.div`
    border: solid black 2px;
    margin: 5px;
    display: flex;
  `;

  const Img = styled.div``;
  const Title = styled.div``;
  const Desc = styled.div``;

  return (
    <>
      <Container>
        <Img />
        <Title> Project1</Title>
        <Desc></Desc>
      </Container>
      <Container>
        <Img />
        <Title> Project2</Title>
        <Desc></Desc>
      </Container>
      <Container>
        <Img />
        <Title> Project3</Title>
        <Desc></Desc>
      </Container>
    </>
  );
};

export default MyProjects;
