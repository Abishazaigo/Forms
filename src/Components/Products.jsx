import './Styles/Web.css';
function Products(){
    return(
        
        <div className="row">
            <h3 className="topic">Featured products</h3>
            <div className="col-1">
    
            </div>
            <div className="col-1">
                <button className="center">
                    << </button>
            </div>
            <div className="col-2">
                <img className="pic1" src="./images/pic1.jpg">
                <p className="product">Herbalife Formula</p>
                <p className="product">₹2000.00</p>
                <button className="bu">Buy Now</button>
            </div>
            <div className="col-2">
                <img className="pic2" src="./images/pic2.jpg">
                <p className="product">Duo 30 Day Program</p>
                <p className="product">₹2000.00</p>
                <button className="buy">Buy Now</button>
            </div>
            <div className="col-2">
                <img className="pic3" src="./images/pic3.jpg">
                <p className="product">Herbalife Cell U Loss</p>
                <p className="product">₹2000.00</p>
                <button className="buy">Buy Now</button>
            </div>
            <div className="col-2">
                <img className="pic4" src="./images/pic4.jpg">
                <p className="product">Herbalife Protein Formula</p>
                <p className="product">₹2000.00</p>
                <button className="buy">Buy Now</button>
            </div>
            <div className="col-1">
                <button className="center">>></button>
            </div>
        </div>
    )
}
export def