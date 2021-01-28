import '../Styles/Web.css';
import Bgimage from '../Images/bgimage.jpg';
import Image2 from '../Images/image2.jpg';
function Intro(){
    return(
        <div className="row">
        <img src={Bgimage} height="300px" width="100%"></img>
        <div className="top-left">
            <p>Welcome to the</p>
            <p>Art of using Herbs</p>
            <div className="transbox">
                <button type="button">Contact us</button>
            </div>
        </div>
        <img src={Image2} className="image2"></img>
        </div>
    )
}
export default Intro;