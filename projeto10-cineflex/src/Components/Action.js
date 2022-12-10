import styled from "styled-components"
import { useState } from "react";

export default function Action({ screen, setScreen }) {

    const [text, useText] = useState("Selecione o filme");


    return (
        <>
            <Instruction>
                <p>{text}</p>
            </Instruction>
        </>
    )
}
// function Print(text){
//     return (
//         <>
//             <Instruction>
//                 <p>{text}</p>
//             </Instruction>
//         </>
//     )
// }

const Instruction = styled.div`
    width: 100%;
    height: 110px;
    color: #293845;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'roboto';
    font-size: 24px;
    font-weight: 400;
`