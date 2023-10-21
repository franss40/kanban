import React from "react"
import ReactDOM from "react-dom/client"
import Kanban from "./components/Kanban"
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Kanban />
    </ChakraProvider>
  </React.StrictMode>
)
