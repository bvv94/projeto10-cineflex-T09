import styled from "styled-components"

export default function Choosen({ poster, title, time, day }) {


    return (
        <>
            <Choosenmovie data-test="footer">
                <img src={poster} alt={title} />
                <div>
                    <p>{title}</p>
                    <p>{day} - {time}</p>
                </div>
            </Choosenmovie>
        </>
    )
}

const Choosenmovie = styled.div`
    width: 100%;
    height: 117px;
    margin-top: 30px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
        width: 64px;
        height: 89px;
        margin: 0 14px 0 10px;
    }
    p{
        font-family: 'roboto';
        font-size: 26px;
        font-weight: 400;
    }
`