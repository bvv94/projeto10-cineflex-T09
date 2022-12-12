import styled from "styled-components";
import Action from "./Action"
import Choosen from "./Choosen"
import { CINZA, CINZABORDA, VERDE, VERDEBORDA, AMARELO, AMARELOBORDA } from "./Colours"

export default function Seats() { //colocar ID do filme

    let seats = []

    console.log(Array.isArray(seats))

    for (let i = 1; i <= 50; i++) {
        seats[i] = i;
    }

    return (
        <>
            <Action text="Selecione o(s) assento(s)" />
            <Div>
                <Place>
                    {seats.map((s, index) => <Seat key={index} onClick={Save({ s })} >{s}</Seat>)}
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
                        <input placeholder="Digite seu nome..."></input>
                    </div>
                    <div><p>CPF do comprador: </p>
                        <input placeholder="Digite seu CPF..."></input>
                    </div>
                </Info>

                <Ok>Reservar assento(s)</Ok>

            </Div>



            

            <Choosen />
        </>
    )
}

function Save({ s }) {
    return console.log(s)
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

const Seat = styled.button`
    background-color: ${CINZA};
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