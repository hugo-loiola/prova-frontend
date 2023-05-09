import React from "react";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";

const Pagina = (props) => {
  return (
    <div>
      <Cabecalho />
      <div className="py-3 text-white text-center mb-3 bg-secondary">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>
      <Container className="mb-5 pb-3">{props.children}</Container>

      <div
        style={{
          width: "100%",
        }}
        className=" position-static bottom-0 py-3 text-white text-center bg-secondary "
      >
        <p>Todos os direitos reservados® </p>
      </div>
    </div>
  );
};

export default Pagina;
