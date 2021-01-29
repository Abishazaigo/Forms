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
      .catch((err) => {
        console.log(err);
      });
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
              <div className="comment">
              <div className="card p-3">
                <p>{comment.title}</p>
                <p>{comment.body}</p>
              </div>
              </div>
            );
          })}
        </>
      );
};
export default Comment;