import { useParams } from "react-router-dom";
import { malhafti} from "../api/malhafti";
import NotFound from "./notfound";
export default function IdParam(){
    const {id} = useParams()
    const v = malhafti.malhafti.find((x) => {return x.id === id})
    return(
        <div className="container">
           <img src={v.image} alt='image not found' style={{'width':"250px"}}/>
           <div >
               <p>{v.namw}</p>
               <p>{v.category}</p>
               <p>{v.description}</p>
               <p>{v.price}</p>
               {v?<p>{}</p>:<NotFound />}
           </div>
        </div>
    )
}