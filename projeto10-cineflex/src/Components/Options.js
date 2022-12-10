import axios from "axios"
import { useState } from "react";
import { useEffect } from "react"
import styled from "styled-components";

export default function Options() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then(res => {
            // for (let i = 0; i < res.data.length; i++) {
            //     setPosts(posts[i] = res.data[i].posterURL)
            //     // console.log(res.data[i].posterURL)
            // }
            setPosts(res.data)
            console.log(posts.length)
            console.log(posts)
            console.log(typeof posts)
        })
        promise.catch(console.log("erro"))
    }, [])

    if (!posts.length) {
        <h1>Carregando...</h1>
    }
    else {
        return (
            <>
                {!posts.length && <h1>Carregando...</h1>}
                {/* <img src={posts} alt="Catioro fofíneo" /> */}
                {posts.length && posts.data.map((post, index) => <imagepost key={index}>{post}</imagepost>)}
            </>
        )
    }

}

const imagepost = styled.div`

`