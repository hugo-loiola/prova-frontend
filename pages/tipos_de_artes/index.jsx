import Pagina from "@/components/Pagina";
import apiArts from "@/services/apiArt";
import React from "react";

const index = ({ tipos }) => {
  return (
    <Pagina titulo="Tipos de Artes">
      <ul>
        {tipos.map((item) => (
          <li>
            {item.title} (Atualizado em: {item.updated_at})
          </li>
        ))}
      </ul>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiArts.get(`/artwork-types`);
  const tipos = await resultado.data.data;
  return {
    props: { tipos }, // will be passed to the page component as props
  };
}
