import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header";
import { PreviewMini } from "../../components/saite_prev";
import { todosSelector } from "../../stor/selectors";
import { allPrev } from "../../stor/thunk";
import "./style.css"


export function Main(params) {
    const mapSaite = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9]
    const [state, setstate] = useState(1);
    const[filter,setFilter]=useState("")
    console.log(filter);

    const discpatch =useDispatch()
    const data = useSelector(todosSelector)
    function Nex() {
        setstate(state+1)
        console.log(state);
    }
    useEffect(() => {
        discpatch(allPrev())
        console.log(state);
        
    }, [discpatch]);
    if (!data.all) {
        return <p>Loading...</p>;
    }
    console.log(data);
    return(
        <div>
            <Header filter={setFilter}/>
            <main className="main">
                <div className="main_gallari">
                    {
                        // mapSaite.slice(0, 8*state).map((element,id)=>
                        // <PreviewMini key={id} name = {element}/>
                        // )
                        data.all.map((element,id)=>
                        <PreviewMini key={id} id={element.id} img={element.img} name = {element.name}/>
                        )
                    }
                </div>
                <div className="main_box">
                    <button onClick={()=>Nex()} className="main_button">Загрузить ещё</button>
                </div>
            </main>
        </div>
    )
}