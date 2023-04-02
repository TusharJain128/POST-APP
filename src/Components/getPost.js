import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function getPost(event) {
    const [post, setPost] = useState([])

    useEffect(() => {
        let token = localStorage.getItem("x-api-key")

        axios.get("http://localhost:3001/getPost", {headers:{"x-api-key": token}})

            .then((res) => {
                setPost(res.data.message)
            })
            .catch((err) => {
                alert(err.response.data.message + " Error")
            })
    }, [])

    return (
        <div className='container'>
        {post.map(({ _id, userId, post }, i) => {
            let url = `/getBook/${_id}`
            return (
                <div className='books shadow p-3 mb-5 bg-white rounded'>
                    <li><a href={url}  >{_id}</a></li>
                    <li>userId: {userId}</li>
                    <li>post: {post}</li>
                </div>
            )
        })}
        </div>
    )

}