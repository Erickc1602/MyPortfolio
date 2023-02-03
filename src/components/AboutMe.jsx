import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  const Container = styled.div``;

  return (
    <>
      <Container>
        <div id="AboutMe" class="content">
          <h1>
            Welcome, I am <br />
            Erick De Carvalho
          </h1>
          <div class="columns">
            <h2>Full-Stack WebDeveloper</h2>
            <p>
              Hi, I'm a Brazilian immigrant and a full-stack web developer with
              a passion for creating innovative and intuitive web applications.
              My expertise in both front-end and back-end development, combined
              with excellent communication skills, allows me to effectively
              collaborate with cross-functional teams to bring projects to life.
              I am always eager to learn new skills and stay up-to-date with the
              latest industry trends.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutMe;
