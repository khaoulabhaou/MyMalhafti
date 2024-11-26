import { useParams } from "react-router-dom";
import { malhafti as data} from "../api/data";
import NotFound from "./notfound";
export default function IdParam(){
    const {id} = useParams()
    const element =data.find((x) => {return x.id === parseInt(id)})
    return(
        <div className="container">
           <img src={data.image} alt='image not found' style={{'width':"250px"}}/>
           <div >
               <p>{data.titel}</p>
               <p>{data.category}</p>
               <p>{data.description}</p>
               <p>{data.price}</p>
               {data?<p>{}</p>:<NotFound />}
           </div>
        </div>
    )
}