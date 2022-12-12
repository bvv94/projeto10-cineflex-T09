import Action from "./Action";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Movie() {

    let [posters, setPosters] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then((res) => {
            setPosters(res.data)
            // for (let i = 0; i <= res.data.length; i++) {
            //     setPosters(posters = res.data[i].posterURL)
            // }
        })
        promise.catch((err) => console.log(err.response.data))
    }, [])

    console.log(posters)
    // console.log(Array.isArray(posters))

    if (!posters.length) {
        <h1>Carregando...</h1>
    }

    return (
        <>
            <Action text="Selecione o filme" />
            {/* {posters.map((poster, index) => <Imgposter key={index}><img src={poster} alt="poster" /></Imgposter>)} */}
            <ChooseMovie>
                { posters.length === 0 ? ("Carregando...") : (
                    posters.map((poster, index) => 
                        <Imgposter key={index}> <img src={poster.posterURL} alt={poster.title}/></Imgposter>
                    ))}
                    
            </ChooseMovie>
        </>
    )
}

const ChooseMovie = styled.div`

`

const Imgposter = styled.div`
    background-color: blue;
    img {
        width: 129px;
        height: 193px;
    }

`