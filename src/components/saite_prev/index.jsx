import { NavLink } from "react-router-dom"
import "./style.css"

export function PreviewMini(params) {
    return(
        <NavLink className="preview" to={`/preview/${params.name}`}>
                <img className="preview_img" src={process.env.PUBLIC_URL + "./img/no_image.jpg"} alt="" />
                <p className="preview_text">{params.name} saite..</p>
        </NavLink>
    )
}