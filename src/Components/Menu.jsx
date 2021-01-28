function Menu(props){
    return(
        <li className="nav-item">
            <a className="nav-link" href="#">{props.link}</a>
        </li>
    )
}
export default Menu;