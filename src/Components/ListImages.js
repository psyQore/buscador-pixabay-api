import React from "react";
import Imagen from "./Image";

const ListImages = ({ images }) => {
  return (
    <div className="col-12 p-5 row">
      {images.map((imagen) => (
        <Imagen key={imagen.id} imagen={imagen} />
      ))}
    </div>
  );
};

export default ListImages;
