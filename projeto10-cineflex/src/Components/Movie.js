import Action from "./Action";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Movie() {

    const [posters, setPosters] = useState([]);


    console.log (posters)
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then((res) => {
            for (let i = 0; i <= res.data.length; i++) {
                if (posters !== []) {
                    setPosters(posters = res.data[i].posterURL)
                    // console.log(posters)             
                    // posters[i] = res.data[i].posterURL
                }
            }
        })
        promise.catch((err) => console.log(err.response.data))
    }, [])

    console.log(posters)
    console.log(Array.isArray(posters))

    if (!posters.length) {
        <h1>Carregando...</h1>
    }

    return (
        <>
            <Action text="Selecione o filme" />
            {posters.map((poster, index) => <Imgposter key={index}><img src={poster} alt="poster" /></Imgposter>)}
            {/* {<Imgposter><img src={posters} alt="poster"/></Imgposter>} */}
        </>
    )
}

const Imgposter = styled.div`
    background-color: blue;

`