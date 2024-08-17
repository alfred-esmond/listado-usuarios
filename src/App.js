import Navbar from "./components/Navbar"; // Importa el componente Navbar desde el archivo correspondiente.
import UserList from "./components/UserList"; // Importa el componente UserList desde el archivo correspondiente.
import { Provider } from "react-redux"; // Importa el componente Provider de react-redux para conectar la aplicación con el store de Redux.
import store from "./store"; // Importa el store de Redux, que contiene el estado global y los reductores.

function App() {
  return (
    <Provider store={store}>
      {/* Envuelve los componentes con el Provider para que tengan acceso al store de Redux */}
      <Navbar /> {/* Renderiza el componente Navbar */}
      <UserList /> {/* Renderiza el componente UserList */}
    </Provider>
  );
}

export default App; // Exporta el componente App para ser utilizado en otras partes de la aplicación.
