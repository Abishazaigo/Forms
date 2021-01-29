import '../Styles/Web.css';
import Prodesc from '../Components/Prodesc';
function Topic(){
    return(
        <div>
        <h3 className="topic">Best sellers</h3>
        <div className="row">   
        <div className="col-2">
        </div>
        <Prodesc name="Herbalife Formula" />
        <Prodesc name="Duo 30 Day Program" />
        <Prodesc name="Herbalife Cell U Loss" />
        <Prodesc name="Herbalife Protein" />
        <div className="col-2">
        </div>
        </div>
        </div>
    )
}
export default Topic;