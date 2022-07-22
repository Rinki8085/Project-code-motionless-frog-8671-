import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
