import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bar from "./Bar";
import Movie from "./Movie";
import Seats from "./Seats";
import Session from "./Session";
import Success from "./Success";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Bar />
        <Routes>
          <Route path="/" element={<Movie />}></Route>
          <Route path="/sessoes/:idFilme" element={<Session />}></Route>
          <Route path="/assentos/:idSessao" element={<Seats />}> </Route>
          <Route path="/sucesso" element={<Success />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}











{/* <Bar />
      <Movie />
      <Seats />
      <Session />
      <Success /> */}