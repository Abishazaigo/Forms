import Pic1 from '../Images/pic1.jpg';
function Prodesc(props){
    return(
        <div class="card col-2" style={{width:"250px"}}>
                    <img class="card-img-top" src={Pic1} alt="Card image"  />
                    <div class="card-body">
                        <p class="card-title">{props.name}</p>
                        <p class="card-text">₹2000.00</p>
                        <button className="bu">Buy Now</button>
                    </div>
        </div>
    )
}
export default Prodesc;