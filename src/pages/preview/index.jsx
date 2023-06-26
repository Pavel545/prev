import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  NavLink, useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { MiniShow } from "../../components/mini_showcase";
import { todosSelector } from "../../stor/selectors";
import { spacificPrev } from "../../stor/thunk";
import "./style.css"
export function Preview() {
    const params = useParams();
    const [state, setstate] = useState(null);
    const [collapse,setCollapse]=useState(false);

    const discpatch =useDispatch()
    const data = useSelector(todosSelector)
    useEffect(() => {
        discpatch(spacificPrev({id:params.id}))
    }, [discpatch]);
    
    if (!data.specific) {
        return <p>Loading...</p>;
    }
    if (state==null) {
        setstate(data.specific[0].media[0])
    }
    console.log(data);
    // console.log([{"id":"382","name":"\u042e\u0440\u0438\u0441\u0442-\u043a\u043e\u043d\u0441\u0430\u043b\u0442","img":".\/content\/preview\/382.jpg","translit":"yurist-konsalt","media":["\/.\/content\/makets\/yurist-konsalt\/01glavnaya-.jpg","\/.\/content\/makets\/yurist-konsalt\/02etapy-raboty-.jpg","\/.\/content\/makets\/yurist-konsalt\/03-semeynoe-pravo-.jpg","\/.\/content\/makets\/yurist-konsalt\/04semeynoe-pravo-.jpg","\/.\/content\/makets\/yurist-konsalt\/05nasledstvennoe-pravo-.jpg","\/.\/content\/makets\/yurist-konsalt\/06trudovoe-pravo-.jpg","\/.\/content\/makets\/yurist-konsalt\/07zhilischnoe-pravo-.jpg","\/.\/content\/makets\/yurist-konsalt\/08zaschita-prav-potrebiteley-.jpg","\/.\/content\/makets\/yurist-konsalt\/09ustanovlenie-faktov-.jpg","\/.\/content\/makets\/yurist-konsalt\/10ispolnitel-noe-proizvodstvo-.jpg","\/.\/content\/makets\/yurist-konsalt\/11grazhdanskoe-pravo-.jpg","\/.\/content\/makets\/yurist-konsalt\/12pravovoe-soprovozhdenie-.jpg","\/.\/content\/makets\/yurist-konsalt\/13arbitrazh-.jpg","\/.\/content\/makets\/yurist-konsalt\/14korporativnye-spory-.jpg","\/.\/content\/makets\/yurist-konsalt\/15vzyskanie-debitorskoy-zadolzhennosti-.jpg","\/.\/content\/makets\/yurist-konsalt\/16kontakty-.jpg"]}]
    // );
    return(
        <div>
            <Header child={"yes"} prints={state}/>
            <main style={!collapse?{gridTemplateColumns:`3fr 20%`}:{gridTemplateColumns:`3fr 0px`}}  className="showcase">
                <div className="showcase_img_box">
                    <img className="showcase_img" src={state} alt="" />
                </div>
                <div className="right_box">
                    <div className={!collapse? "right_gallery":"right_gallery hidden"}>
                        <div className="right_gallery_box">
                            <button className={!collapse? "hide":"bec"} onClick={()=>setCollapse(!collapse)}><img className="hide_img" src={process.env.PUBLIC_URL + "/strel.svg"} alt="" /></button>
                            {data.specific[0].media.map((element, id)=>
                            <MiniShow setstate={setstate} key={id} name={element} id={id} />)}
                        </div>
                    </div>
                </div>
                  
                
            </main>
            <div onClick={() => {window.scrollTo({top:0,behavior: "smooth"})}} className="upWind">
                <img className="upWind_img"  src={process.env.PUBLIC_URL + "/up1.svg"} alt="" />
                <img className="upWind_img2"  src={process.env.PUBLIC_URL + "/up2.svg"} alt="" />
                <p className="upWind_text">Наверх</p>
            </div>
        </div>
    )
}
function Beak(params) {
    return(
        <NavLink  to="/">
            
        </NavLink>
        
    )
}
