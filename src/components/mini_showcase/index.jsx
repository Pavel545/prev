import "./style.css"

export function MiniShow({id,name,setstate}) {

    const Img=()=> {
        setstate(name)
    }
    return(
        <div onClick={()=>Img()} className="miniShow">
            <p className="miniShow_text">
                {id}.   {name}
            </p>
            <img className="miniShow_img" src="" alt="" />
        </div>
    )
}