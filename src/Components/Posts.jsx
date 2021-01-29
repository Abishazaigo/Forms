import {Link} from "react-router-dom";
const Posts = (props) => {
  return (
    <div className="row">
      {props.posts.map((post) => {
        return (
            <div className="row">
              <div className="col-5">
              </div>
              <div className="col-6">
                <div className="card mb-5" style={{ width: "300px", height:"300px"}}>
                  <h6 className="card-header h-25" style={{ color: "#59a310" }}>{post.title}</h6>
                  <p className="card-body" style={{ textAlign: "justify" }}>{post.body}</p>
                    <div className="row">
                      <div className="text-left p-4">
                        <Link to="/View">View More</Link>
                      </div>
                      <div className="text-right p-4">
                        <Link to="/Comment">Comment</Link>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-1">
              </div>
            </div>
        );
      })}
    </div>
  );
};
export default Posts;