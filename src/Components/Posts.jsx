import {Link} from "react-router-dom";
const Posts = (props) => {
  return (
    <div className="row">
      {props.posts.map((post) => {
        return (
            <div className="row">
              <div className="col-2">
              </div>
              <div className="col-8">
                <div className="card" style={{ width: "300px", height:"300px"}}>
                  <h6 className="card-header" style={{ color: "#59a310" }}>{post.title}</h6>
                  <p className="card-body" style={{ textAlign: "justify" }}>{post.body}</p>
                  
                    <div className="row">
                      <div className="col-1"></div>
                      <div className=" card-footer col-5 text-left">
                      
                    <Link to="/View">View More</Link>
                    
                    </div>
                    <div className=" card-footer col-5 text-right">
                    
                    <Link to="/Comment">Comment</Link>
                    <div className="col-1"></div>
                    </div>
                    </div>
                </div>
                <div className="col-2">
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};
export default Posts;