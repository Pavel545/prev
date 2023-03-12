import { Link, NavLink } from "react-router-dom"
import { Preview } from "../../pages/preview"
import "./style.css"

export function PreviewMini(params) {
    return(
        <Link className="preview" to={`/preview/${params.name}`} element={<Preview/>}>
                <img className="preview_img" src={process.env.PUBLIC_URL + "./img/no_image.jpg"} alt="" />
                <p className="preview_text">{params.name} saite..</p>
        </Link>
    )
}