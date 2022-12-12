import styled from "styled-components"


export default function Action({ text }) {

    return (
        <>
            <Instruction>
                <p>{text}</p>
            </Instruction>
        </>
    )
}


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
    margin-bottom: 30px;
`