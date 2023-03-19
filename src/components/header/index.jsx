import { Link } from "react-router-dom"
import "./style.css"

export function Header({child,filter}) {

    return(
        <header className="header">
            <Link to="/" className="logo">
                <img className="logo" src={process.env.PUBLIC_URL + "/Logo.svg"} alt="" />
            </Link>
            <div className="search">
                <input  onChange={(event) => filter(event.target.value)} className="search_failed" type="text" />
                <img className="search_img" src={process.env.PUBLIC_URL + "/search.svg"} alt="" />
            </div>
            {child? child:""}
        </header>
    )
}