import React, { useEffect } from "react"; // Importa React y el hook useEffect para manejar efectos secundarios en el componente.
import { fetchAllUsers } from "../store/slices/users"; // Importa la acción fetchAllUsers desde el slice de Redux para obtener usuarios.
import { useDispatch, useSelector } from "react-redux"; // Importa hooks de React-Redux para acceder al estado global y despachar acciones.

const UserList = () => {
  // 1. useSelector se utiliza para acceder al estado global de Redux y extraer la lista de usuarios.
  //    Aquí, la propiedad 'list' de 'state.users' se renombra como 'users'.
  const { list: users } = useSelector((state) => state.users);

  // 2. useDispatch proporciona la función dispatch para enviar acciones a Redux.
  const dispatch = useDispatch();

  useEffect(() => {
    // 3. useEffect se usa para despachar la acción fetchAllUsers cuando el componente se monta.
    //    Esto carga los usuarios desde la API y actualiza el estado global.
    dispatch(fetchAllUsers());
  }, [dispatch]); // La dependencia 'dispatch' asegura que el efecto se ejecute solo cuando 'dispatch' cambie.

  return (
    <div className="container mt-4">
      {/* 4. La clase 'container mt-4' de Bootstrap aplica márgenes y centrado al contenido */}
      <div className="row">
        {/* 5. Itera sobre la lista de usuarios y crea una tarjeta para cada uno */}
        {users.map((user, index) => (
          <div key={index} className="col-md-3 mb-4">
            {/* La clase 'col-md-3 mb-4' asegura que las tarjetas se distribuyan en columnas y tengan margen */}
            <div className="card">
              {/* 6. La imagen del usuario con estilo para asegurar tamaño y recorte uniforme */}
              <img
                src={user.avatar}
                alt="avatar"
                style={{
                  width: "100%", // Ajusta el ancho de la imagen para llenar el contenedor
                  height: "200px", // Establece una altura fija para todas las imágenes
                  objectFit: "cover", // Recorta la imagen para ajustarse al contenedor sin distorsionar
                }}
              />
              <div className="card-body">
                {/* 7. Muestra el nombre completo del usuario y el correo electrónico en la tarjeta */}
                <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList; // Exporta el componente UserList para que pueda ser utilizado en otras partes de la aplicación.
