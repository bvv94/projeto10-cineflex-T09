import styled from "styled-components"

export default function Bar() {
    return (
        <>
            <TopPage>
                <p>CINEFLIX</p>
            </TopPage>
        </>
    )
}

const TopPage = styled.div`
    background-color: #C3CFD9;
    font-family: 'roboto';
    font-weight: 400;
    font-size: 34px;
    color: #E8833A;
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
`