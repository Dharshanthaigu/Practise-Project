import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { fetchTopAlbum } from "../src/Api";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchTopAlbum();
  }, []);

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
