import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Action from "./Action"
import Choosen from "./Choosen"
import { CINZA, CINZABORDA, VERDE, VERDEBORDA, AMARELO, AMARELOBORDA } from "./Colours"

export default function Seats() {

    const { idSessao } = useParams();
    const [seat, setSeat] = useState([]);
    const [posters, setPosters] = useState([]);
    const [info, setInfo] = useState([]);
    const [daymovie, setDaymovie] = useState([]);
    const [buyername, setBuyername] = useState([]);
    const [buyercpf, setBuyercpf] = useState([]);
    const [available, setAvailable] = useState (CINZA);

    const [bought, setBought] = useState(false);
    let ids = [];

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        );

        promise.then((res) => {
            setSeat(res.data.seats);
            setPosters(res.data.movie);
            setInfo(res.data);
            setDaymovie(res.data.day);
        });
    }, []);

    console.log(info)
    console.log(seat)
    console.log(posters)
    console.log(daymovie)

    console.log(buyername);
    console.log(buyercpf);

    return (
        <>
            <Action text="Selecione o(s) assento(s)" />
            <Div>
                <Place>
                    {seat.length === 0 ? ("carregando...") :
                        (seat.map((s, index) =>
                            s.isAvailable ? (
                                <div data-test="seat" key={index} onClick={
                                    // ((() => setBought(!bought),
                                    ((() => setAvailable(VERDE),
                                        () => mark(s.id, s.name, ids)))
                                }>
                                    <Seat>{s.name}</Seat>
                                </div>) :
                                (<div data-test="seat" key={index}>
                                    <SeatOcuppied >{s.name}</SeatOcuppied>
                                </div>)))}
                </Place>
                <Options>
                    <ul>
                        <li><p></p></li>
                        <li><p></p></li>
                        <li><p></p></li>

                    </ul>
                </Options>
                <Options>
                    <ul>
                        <div>Selecionado</div>
                        <div>Disponível</div>
                        <div>Indisponivel</div>

                    </ul>
                </Options>

                <Info>
                    <div><p>Nome do comprador: </p>
                        <input data-test="client-name" placeholder="Digite seu nome..."
                            type="text"
                            onChange={(e) => setBuyername(e.target.value)}
                            value={buyername}
                        ></input>
                    </div>
                    <div><p>CPF do comprador: </p>
                        <input data-test="client-cpf" placeholder="Digite seu CPF..."
                            type="number"
                            onChange={(e) => setBuyercpf(e.target.value)}
                            value={buyercpf}
                        ></input>
                    </div>
                </Info>

                <Ok><Link data-test="book-seat-btn" to="">Reservar assento(s)</Link></Ok>

            </Div>
            <Choosen poster={posters.posterURL} title={posters.title} time={info.name} day={daymovie.weekday} />
        </>
    )
}

function mark(id, name, ids) {

    console.log(name)

    ids.push(name);
    console.log(ids)

}


const Ok = styled.button`
    margin-top: 20px;
    background-color: #E8833A;
    width: 225px;
    height: 42px;
    border-radius: 3px;
    border-color: #E8833A;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 41px;
    div{
        margin-top: 10px;
    }
    p{
        font-family: 'ROBOTO';
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 3px;
    }
    input{
        height: 51px;
        width: 327px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        ::placeholder{
            font-family: 'roboto';
            font-weight: 400;
            font-style: italic;
            font-size: 18px;
            color: #AFAFAF;
        }
    }
`
/* background-color: ${(bought ? 'VERDE' : 'CINZA')}; */
const Seat = styled.button`
    background-color: ${(({ bought }) => bought ? 'VERDE' : 'CINZA')};
    /* background-color: ${CINZA}; */
    border: 1px solid ${CINZABORDA};
    border-radius: 12px;
    width: 26px;
    height: 26px;
    margin:  0 7px 18px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`
const SeatOcuppied = styled.button`
background-color: ${AMARELO};
border: 1px solid ${AMARELOBORDA};
border-radius: 12px;
width: 26px;
height: 26px;
margin:  0 7px 18px 0;
display: flex;
justify-content: center;
align-items: center;
:hover {
    cursor: pointer;
}
`

const Place = styled.div`
    width: 350px;
    height: 250px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    ;
`
const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Options = styled.div`
    width: 350px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
        font-family: 'roboto';
        font-weight: 400;
        font-size: 13px;
    }
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50px;
    }
    li {
        width: 26px;
        height: 26px;
        background-color: blue;
        border: 1px solid #808F9D;
        border-radius: 17px;
        width: 26px;
        height: 26px;
        display: flex;
        flex-direction: column;
                
        :nth-child(1){
        background-color: ${VERDE};
        border-color: ${VERDEBORDA};
        }
        :nth-child(2){
        background-color: ${CINZA};
        border-color: ${CINZABORDA};
        }
        :nth-child(3){
        background-color: ${AMARELO};
        border-color: ${AMARELOBORDA};
        }
    }
    
`
const Name = styled.div`
    background-color: green;
`