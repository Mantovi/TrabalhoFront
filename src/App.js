import { RouterProvider, createBrowserRouter } from "react-router-dom"; 
import './App.css'; 
import Home from "./pages/Home"; 
import { ChakraProvider } from "@chakra-ui/react"; 
import Catalog from "./pages/Catalog"; 
import Detail from "./pages/Detail"; 
import Login from "./pages/Login"; 
import SignUp from "./pages/SignUp"; 

// Criação das rotas da aplicação usando createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/home", 
    element: <Home/> 
  },
  {
    path: "/catalog", 
    element: <Catalog/> 
  },
  {
    path: "/digimon/:name", 
    element: <Detail /> 
  },
  {
    path: "login", 
    element: <Login/> 
  },
  {
    path: "/", 
    element: <Home/> 
  },
  {
    path: "signup", 
    element: <SignUp />
  }
]);

// Função principal do aplicativo
function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}/> 
    </ChakraProvider>
  );
}

export default App;
