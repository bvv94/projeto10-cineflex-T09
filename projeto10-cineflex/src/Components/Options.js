import axios from "axios"
import { useState } from "react";
import { useEffect } from "react"
import styled from "styled-components";

export default function Content() {

    const [posts, setPosts] = useState([])

    useEffect (()=>{
        const promise = axios.get ("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then (res => {console.log(res.data)
                                console.log(res.data.id)})
        // {setPosts(res.data.posterURL)})

    },[])

    return (
        <>
            <img src={posts} alt="Catioro fofíneo" />
            {/* {posts.map(post => <imagepost>{post}</imagepost>)} */}
        </>
    )
}

const imagepost = styled.li`

`