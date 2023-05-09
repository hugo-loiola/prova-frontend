import Pagina from "@/components/Pagina";
import apiArts from "@/services/apiArt";
import React from "react";
import { Table } from "react-bootstrap";

const index = ({ artes }) => {
  return (
    <Pagina titulo="Obras de Arte">
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>Detalhes</th>
            <th>Titulo</th>
            <th>Artista</th>
            <th>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {artes.map((item) => (
            <tr key={item.id}>
              <td>
                <a href={`/obras/${item.id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-info-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                </a>
              </td>
              <td>{item.title}</td>
              <td>{item.artist_title}</td>
              <td>{item.department_title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiArts.get(`/artworks`);
  const artes = await resultado.data.data;
  return {
    props: { artes }, // will be passed to the page component as props
  };
}
