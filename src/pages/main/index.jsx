import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header";
import { PreviewMini } from "../../components/saite_prev";
import { todosSelector } from "../../stor/selectors";
import { allPrev } from "../../stor/thunk";
import "./style.css"


export function Main(params) {
    const [state, setstate] = useState(1);
    const[filter,setFilter]=useState("")
    const[mass,setMass]=useState("")

    const discpatch =useDispatch()
    const data = useSelector(todosSelector)
    function Nex() {
        setstate(state+1)
    }
    
    
    useEffect(() => {
        if (!data.all) {
            discpatch(allPrev())
        }
    
        setMass(data.all);
        
    }, [data.all,discpatch]);
      if (mass === null) {
        return "Loading...";
      }
    if (mass==null) {
        return <p>Loading...</p>;
    }
    // console.log(mass);
    return(
        <div>
            <Header filter={setFilter}/>
            <main className="main ">
                <div  className="conteiner">
                    <div className="main_gallari">
                        {mass ?
                            // mapSaite.slice(0, 8*state).map((element,id)=>
                            // <PreviewMini key={id} name = {element}/>
                            // )
                            <Gallery  value={filter} mass={mass} state={state}/>:''
                        }
                    </div>
                    {mass.length>=12 &&
                        <div onClick={()=>Nex()} className="main_box">
                              Загрузить ещё
                        </div>
                    }
                    <div onClick={() => {window.scrollTo({top:0,behavior: "smooth"})}} className="upWind">
                        <img className="upWind_img"  src={process.env.PUBLIC_URL + "/up1.svg"} alt="" />
                        <img className="upWind_img2"  src={process.env.PUBLIC_URL + "/up2.svg"} alt="" />
                        <p className="upWind_text">Наверх</p>
                    </div>
                </div>
                <div className="fon"><div className="fon_img"></div></div>
            </main>
        </div>
    )
}
const Gallery = ({ value, mass,state }) => {
    let filterMass = mass.filter((element) => {
      return element.name.toLowerCase().includes(value.toString().toLowerCase());
    });
    return filterMass.slice(0, 12*state).map((element,id)=>
    <PreviewMini key={id} id={element.id} img={element.img} name = {element.name}/>
    )
  };