import { useState } from "react";
import { useParams } from "react-router-dom";
import { Burger } from "../../components/burger";
import { Header } from "../../components/header";
import { MiniShow } from "../../components/mini_showcase";
import "./style.css"
export function Preview() {
    const params = useParams();
    console.log(params.name);
     const [state, setstate] = useState(null);
    const mass =[ 1,2,3,5,10,6,7]
    const[filter,setFilter]=useState("")
    console.log(filter);
    return(
        <div>
            <Header filter={setFilter} child={<Burger/>}/>
            <main className="showcase">
                <div className="showcase_img">
                    <p className="showcase_text">{state}</p>
                    <img src="" alt="" />
                </div>
                <div className="right_gallery">
                    {mass.map((element, id)=>
                    <MiniShow setstate={setstate} key={id} name={element} id={id} />)}
                </div>
            </main>
        </div>
    )
}