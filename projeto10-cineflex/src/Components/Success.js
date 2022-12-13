import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Success() {


    <></>

    return (
        <Div>
            <Green>
                Pedido feito com sucesso!
            </Green>
            <MovieInfo  data-test="movie-info">
               
            </MovieInfo>
            <SeatsInfo data-test="seats-info">

            </SeatsInfo>
            <ClientInfo data-test="client-info">
                    
            </ClientInfo>


            <Ok><Link data-test="go-home-btn" to="/">Voltar pra Home</Link></Ok>
        </Div>
    )
}

const MovieInfo = styled.div`
`
const SeatsInfo = styled.div`
`
const ClientInfo = styled.div`
`
const Div = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Green = styled.div`
    width: 100%;
    height: 110px;
    color: #247A6B;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'roboto';
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
`
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