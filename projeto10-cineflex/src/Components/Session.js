import Action from "./Action"
import Choosen from "./Choosen"
import { useParams } from 'react-router-dom';

export default function Session(){

    const params = useParams();

	console.log(params)

    return (
        <>
        <Action text="Selecione o horário"/>
        Session OK
        <Choosen/>
        </>
    )
}