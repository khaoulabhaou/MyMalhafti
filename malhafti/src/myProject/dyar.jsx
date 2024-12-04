import { malhafti } from "../api/malhafti";
import Affichage from "./Affichage";
import BackToTopButton from "./BackToTopButton";

export default function Dyar(){
    return(
        <div className="container" id="content">
            {
                malhafti.malhafti.filter((malhafti)=>{
                    return malhafti.category == "ديار"
                }).map((element, i) => {
                    return <Affichage key={i} malhafti = {element}/>
                })
            }
                    <BackToTopButton />
        </div>
    ) 
}