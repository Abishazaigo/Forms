import Header from './Header';
import Recent from './Recent';
import Products from './Products';
import Footer from './Footer';
import Video from './Video';
import Topic from './Topic';
import Gallery from './Gallery';
import Bgimage from '../Images/bgimage.jpg';
import Image2 from '../Images/image2.jpg';
import Image3 from '../Images/image3.png';
function Home(){
    return(
        <div>
        <Header />
        <div className="row">
        <img src={Bgimage} height="300px" width="100%" />
        <div className="top-left">
            <p>Welcome to the</p>
            <p>Art of using Herbs</p>
            <div className="transbox">
                <button type="button">Contact us</button>
            </div>
        </div>
        <img src={Image2} className="image2"></img>
        </div>
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
        <Products />
        <Video />
        <Topic />
        <Gallery />
        <Recent />
        <Footer />
        </div>
    )
}
export default Home;