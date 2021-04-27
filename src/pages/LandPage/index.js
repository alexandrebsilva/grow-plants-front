import React from "react";
import { Container, Jumbotron } from "reactstrap";
import PageTitle from "../../components/PageTitle";

const LandPage = (props) => {
  return (
    <Container>
      <Jumbotron>
        <PageTitle>GROW PLANTS!</PageTitle>{" "}
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </Jumbotron>
    </Container>
  );
};

export default LandPage;
