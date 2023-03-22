import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { fetchTopAlbum } from "../src/Api";
import { useEffect } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import AutoComplete from "./components/AutoComplete";

function App() {
  useEffect(() => {
    fetchTopAlbum();
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Header />
        <Body />
        {/* <AutoComplete /> */}
      </StyledEngineProvider>
    </>
  );
}

export default App;
