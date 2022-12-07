import Action from "./Action"
import { useState } from "react"
import Options from "./Options"

export default function Content() {

    const [screen, setScreen] = useState(0)

    return (
        <>
            <Action screen={screen} setScreen={setScreen}/>
            <Options/>
        </>
    )
}