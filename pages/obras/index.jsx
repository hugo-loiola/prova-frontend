import Pagina from "@/components/Pagina";
import apiArts from "@/services/apiArt";
import React from "react";
import { Table } from "react-bootstrap";
import { MdTouchApp } from "MdTouchApp/md";

const index = ({ artes }) => {
  return (
    <Pagina titulo="Obras de Arte">
      <Table>
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
                <MdTouchApp />
              </td>
              <td></td>
              <td></td>
              <td></td>
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
