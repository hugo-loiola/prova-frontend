import Pagina from "@/components/Pagina";
import apiArts from "@/services/apiArt";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const index = ({ arte }) => {
  const image = `https://www.artic.edu/iiif/2/${arte.image_id}/full/843,/0/default.jpg`;
  return (
    <Pagina titulo={arte.title}>
      <Row>
        {arte.image_id == null ? (
          <Col>
            {" "}
            <Link className="btn btn-success my-3" href={"/obras"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-backspace-fill"
                viewBox="0 0 16 16"
              >
                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
              </svg>{" "}
              Voltar
            </Link>
          </Col>
        ) : (
          <Col>
            <Card border="danger">
              <Card.Header className="bg-danger text-white">Foto</Card.Header>
              <div className="p-3">
                <Card.Img
                  variant="top"
                  src={image}
                  alt={arte.title}
                  className="border border-secondary rounded-top "
                />
              </div>
              <Card.Body>
                <Link className="btn btn-primary" href={image} target="_blank">
                  Ampliar{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </Link>
              </Card.Body>
            </Card>
            <Link className="btn btn-success my-3" href={"/obras"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-backspace-fill"
                viewBox="0 0 16 16"
              >
                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
              </svg>{" "}
              Voltar
            </Link>
          </Col>
        )}

        <Col md={8}>
          <Card>
            <Card.Header className="bg-danger text-white">
              {arte.title}
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>Artista:</strong> {arte.artist_title}
                <br />
                <br />
                <strong>Departamento:</strong>
                {"  "}
                {arte.department_title}
                <br />
                <br />
                <strong>Origem:</strong>
                {"  "}
                {arte.place_of_origin}
                <br />
                <br />
                <strong>Dimensões:</strong>
                {"  "}
                {arte.dimensions}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiArts.get(`/artworks/${id}`);
  const arte = await resultado.data.data;
  return {
    props: { arte }, // will be passed to the page component as props
  };
}
