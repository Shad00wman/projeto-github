import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
             .then((res) => setPosts(res.data))

    }, [])

    console.log(posts)


    return (
        <>
        <div>
            <h2>Lista de Posts</h2>
            <ul>
                {posts.map((posts) => (
                    <li key={posts.id}>
                        <Link to={`/Detalhes/${posts.id}`}>{posts.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}