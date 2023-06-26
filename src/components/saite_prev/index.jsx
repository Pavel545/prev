import { Link, NavLink } from "react-router-dom"
import { Preview } from "../../pages/preview"
import "./style.css"

export function PreviewMini(params) {
    return(
        <NavLink className="preview" to={`preview/${params.id}`} element={<Preview/>}>
            <div className="preview_img_box">
                <img className="preview_img" src={params.img} alt="" />
                {/* <img className="preview_img" src={params.img} alt="" /> */}


            </div>
                <p className="preview_text">{params.name}</p>
        </NavLink>
    )
}