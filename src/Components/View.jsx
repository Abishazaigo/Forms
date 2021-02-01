import {useState, useEffect} from "react";
import axios from 'axios';
import '../Styles/Web.css';
function View(){
    const [views, setViews] = useState({});
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res.data);
        setViews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return(

    <Views data={views}/>
  )
}
const Views = (props) => {

        return (
          <div className="view">
            <p>Title : {props.data.title}</p>
            <p>Content : {props.data.body}</p>
          </div>
        );
};
export default View;