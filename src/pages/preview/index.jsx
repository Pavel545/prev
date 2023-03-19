import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { MiniShow } from "../../components/mini_showcase";
import "./style.css"
export function Preview() {
    const params = useParams();
    console.log(params.name);
     const [state, setstate] = useState(null);
    const mass =[ 1,2,3,5,10,6,7]
    const[filter,setFilter]=useState("")
    const [collapse,setCollapse]=useState(false);
    console.log(filter);
    return(
        <div>
            <Header filter={setFilter} child={<Beak/>}/>
            <main className="showcase">
                <div className="showcase_img">
                    <p className="showcase_text">{state}</p>
                    <img src="" alt="" />
                </div>
                {!collapse? 
                <div className="right_gallery">
                    <button onClick={()=>setCollapse(!collapse)}>{"--->"}</button>
                    {mass.map((element, id)=>
                    <MiniShow setstate={setstate} key={id} name={element} id={id} />)}
                </div>  :
                <button className="bec" onClick={()=>setCollapse(!collapse)}>{"<---"}</button>
                }       
                
            </main>
        </div>
    )
}
function Beak(params) {
    return(
        <NavLink to="/">
            <button>
                Назад
            </button>
        </NavLink>
        
    )
}