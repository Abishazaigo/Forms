import '../Styles/Web.css';
import Bgimage2 from '../Images/bgimage2.jpg';
import Bgimage21 from '../Images/bgimage21.jpg';
import Bgimage22 from '../Images/bgimage22.jpg';
import Bgimage23 from '../Images/bgimage23.jpg';
function Gallery(){
    return(
        <div>
            <h3 class="topic">Our Gallery</h3>
            <div class="row">
                <div class="col-3">
                    <img class="bgimage2" src={Bgimage2} />
                </div>
                <div class="col-3">
                    <img class="bgimage2" src={Bgimage21} />
                </div>
                <div class="col-3">
                    <img class="bgimage2" src={Bgimage22} />
                </div>
                <div class="col-3">
                    <img class="bgimage3" src={Bgimage23} />
                </div>
            </div>
        </div>
    )
}
export default Gallery;