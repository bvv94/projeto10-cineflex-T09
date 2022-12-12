import Action from "./Action"
import Choosen from "./Choosen"
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Session() {

    const { idFilme } = useParams();
    const [day, setDay] = useState([]);
    const [posters, setPosters] = useState([]);
    const [idsession, setIdsession] = useState([]);

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        );

        promise.then((res) => {
            setDay(res.data.days);
            setPosters(res.data);
        });
    }, []);

    console.log(posters)

    return (
        <>
            <Action text="Selecione o horário" />
            <Div>
                {day.length === 0 ? ("Carregando...") : (
                    day.map((d) => (
                        <DayAndTime data-test="movie-day" key={d.id}>
                            <Day>{d.weekday} - {d.date}</Day>
                            <Times>
                                {d.showtimes.map((t) =>
                                    <Link data-test="showtime" to={`/assentos/${t.id}`} key={t.id}>
                                        <Time key={t.name} poster={posters.posterURL} title={posters.title} >{t.name}</Time>
                                    </Link>
                                )}
                            </Times>
                        </DayAndTime>
                    )
                    ))}

            </Div>
            <Choosen poster={posters.posterURL} title={posters.title} />
        </>
    )
}

const Times = styled.div`
    display: flex;
    
`
const DayAndTime = styled.div`
`
const Div = styled.div`
    background-color: beige;
    margin-left: 15px;
    margin-right: 15px;
    display:flex;
    flex-direction: column;

`
const Day = styled.p`
    width:260px;
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
    margin-right: 18px;
    justify-content: center;
    align-items: center;
`