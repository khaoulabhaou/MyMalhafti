import { malhafti } from "../api/malhafti";
import Affichage from "./Affichage";

export default function Bodiyat(){
    return(
        <div className="container" id="content">
            {
                malhafti.malhafti.filter((malhafti) => {
                    return malhafti.category == "بودي"
                }).map((element,i) => {
                    return(
                    <Affichage key={i} malhafti = {element} />
                    )
                })
            }
        </div>
    )
}