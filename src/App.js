import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import ListImages from "./Components/ListImages";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const consultAPi = async () => {
      if (search === "") return;

      // Consulta a la API
      const imagesPerPage = 30;
      const key = "15075189-16dfd666eb421331112aba84d";
      const url = `
    https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;

      const response = await fetch(url);
      const result = await response.json();

      //console.log(result.hits);
      setImages(result.hits);
    };

    consultAPi();
  }, [search]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImages 
          images={images}
        />
      </div>
    </div>
  );
}

export default App;
