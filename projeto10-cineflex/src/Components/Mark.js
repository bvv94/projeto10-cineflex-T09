import { useEffect } from "react";

export default function Mark(final, setFinal, name, ids, info, posters) {

    console.log("entrou Mark")
            console.log(name)

            ids.push(name);

            console.log(ids)

            console.log(info)

            const a = info.day.date // dia/mes
            const b = info.name  //hora
            const c = posters.title //nome

    useEffect(() => {
                setFinal(...final, ids, c, a, b)
            }, [])

            console.log(final)

    return (
        <>
            
        </>
    )
}