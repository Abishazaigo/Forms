import {useState, useEffect} from "react";
import axios from 'axios';

function View(){
    const [views, setViews] = useState({});
    useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res.data);
        setViews(res.data);
      })
  }, []);

  return(
    <Views title={views.title} body={views.body}/>
  )
}
const Views = (props) => {

        return (
          <div className="card">
            <p>{props.title}</p>
            <p>{props.body}</p>
          </div>
        );
};
export default View;