import Action from "./Action"
import Choosen from "./Choosen"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Session() {

    const { idFilme } = useParams();
    const [day, setDay] = useState([])
    const [time, setTime] = useState([])
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        );

        promise.then((res) => {
            setDay(res.data.days);
            setPosters(res.data);
        });
    }, []);

    console.log(day)

    return (
        <>
            <Action text="Selecione o horário" />
            Session OK
            <Div>
                {day.length === 0 ? ("Carregando...") : (
                    day.map((d) => (
                        <Day key={d.id}>
                            {d.weekday} {d.date}
                        </Day>
                        
                        )                                                
                    ))}


                <Day>Quinta-feira - 24/06/2021</Day>
                <Time>15:00</Time>

            </Div>
            <Choosen poster={posters.posterURL} title={posters.title} />
        </>
    )
}

const Sessiondata = styled.div`
    /* background-color: brown; */
`
const Div = styled.div`
    background-color: beige;
    margin-left: 15px;
    margin-right: 15px;
    display:flex;
    flex-direction: column;

`
const Day = styled.p`
    width:241px;
    height: 35px;
    font-family:'roboto';
    font-weight: 400;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Time = styled.button`
    width: 83px;
    height: 43px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #E8833A;
    border-color: #E8833A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
`