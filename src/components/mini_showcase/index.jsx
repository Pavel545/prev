import "./style.css"

export function MiniShow({id,name,setstate}) {

    const Img=()=> {
        setstate(name)
    }
    return(
        <div onClick={()=>Img()} className="miniShow">
            <div className="miniShow_img_box">
                <img className="miniShow_img" src={name} alt="" />

            </div>

            {/* <p className="miniShow_text">
                {id+1}. {name}
            </p> */}
        </div>
    )
}