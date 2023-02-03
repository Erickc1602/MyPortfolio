import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Container = styled.div``;

const Contact = () => {
  return (
    <>
      <Container>
        <Link to="https://github.com/Erickc1602" style={{ color: "inherit" }}>
          <GitHubIcon />
        </Link>
      </Container>
      <Container>
        <Link
          to="https://www.linkedin.com/in/erick-de-carvalho-7638641b0/"
          style={{ color: "inherit" }}
        >
          <LinkedInIcon />
        </Link>
      </Container>
      <Container>
        <MailIcon />
        <p>ecarv97@gmail.com</p>
      </Container>
      <Container>
        <Link to="/contact" style={{ color: "inherit" }}>
          <ContactMailIcon />
        </Link>
        <p>Contact Me</p>
      </Container>
    </>
  );
};

export default Contact;
