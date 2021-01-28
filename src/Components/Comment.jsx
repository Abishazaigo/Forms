import {useState, useEffect} from "react";
import axios from 'axios';

function Comment(){
    const [comments, setComments] = useState([]);
    useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
  }, []);

  return(
    comments && comments.length > 0 && <Comments comments = {comments}/>
  )
}
const Comments = (props) => {
    return (
        <>
          {props.comments.map((comment) => {
            return (
              <div className="card">
                <p>{comment.title}</p>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </>
      );
};
export default Comment;