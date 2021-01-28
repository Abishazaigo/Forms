import '../Styles/Web.css';
import Menu from '../Components/Menu';
import Logo from '../Images/image.png';
function Header(){
    return (
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <img className="logo" src={Logo}/>
                    </div>
                    <div className="col-lg-8 text-white">
                        <div className="navbar-collapse collapse justify-content-center order-2">
                            <ul className="navbar-nav">
                                <Menu link="HOME"/>
                                <Menu link="HERBALIFE"/>
                                <Menu link = "STORE"/>
                                <Menu link = "GALLERY"/>
                                <Menu link = "BLOG"/>
                                <Menu link = "CONTACT US"/>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="fa fa-facebook"></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="fa fa-youtube"></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="fa fa-linkedin"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header;