import '../Styles/Web.css';
import Image3 from '../Images/image3.png';
function About(){
    return(
    <div className="row">
        <div className="col-2">

        </div>
        <div className="col-5 p-4">
            <h3>About us</h3>
            <p align="justify">Since 1999, Internet Marketing Ninjas has mastered the art of creating expert content
                that goes viral, earns trusted links, and ranks at the top of Google. Looking to transform
                your content marketing strategy? Learn how our Ninja team can help by scheduling a FREE
                consultation today.</p>
            <button type="button">View more</button>
        </div>
        <div className="col-3">
            <img className="image3" src={Image3}/>
        </div>
        <div className="col-2">

        </div>
    </div>
    )
}
export default About;