import React from "react"; // Importa React para usar JSX y crear el componente.

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      {/* La etiqueta <nav> define una sección de navegación en la página */}
      <div className="container">
        {/* La clase 'container' de Bootstrap centra el contenido y aplica márgenes laterales automáticos */}
        <a className="navbar-brand" href="/">
          {/* La clase 'navbar-brand' estiliza el texto de la marca de la barra de navegación */}
          LISTA DE USUARIOS
        </a>
      </div>
    </nav>
  );
};

export default Navbar; // Exporta el componente Navbar para que pueda ser importado y utilizado en otras partes de la aplicación.
