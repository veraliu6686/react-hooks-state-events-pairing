import React, {useState} from "react"
import Comment from "./Comments";

function Main ({video}){
    console.log ( video.comments )

    const [hideComment, setHideComment] = useState (false)
    const toggleComment =()=>{
        setHideComment(!hideComment)
    }

    const displayComment = video.comments.map( (comment)=>{
        return (
            <div>
                <h3>{comment.user}</h3>
                <h5>{comment.comment}</h5>
            </div>
            // <Comment user = {comment.user} comment = {comment.comment}/>
        )
    })

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views}Views</p>
            <p>Uploaded on {video.createdAt}</p>
            <button>{video.upvotes}Love it!</button>
            <button>{video.downvotes}Eww~</button>
            <br></br>
            <button onClick = {toggleComment}>Hide Comments</button>
            <hr></hr>

            { hideComment ? null : displayComment }

        </div>
    )
}


export default Main;
