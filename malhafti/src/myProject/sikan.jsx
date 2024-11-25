import { malhafti } from "../api/malhafti";
import Affichage from "./Affichage";

export default function Sikan(){
    return(
        <div className="container" id="content">
            {
                malhafti.malhafti.filter((malhafti) => {
                    return malhafti.category == "صيكان"
                }).map((malhafti,i) => {
                    return(
                    <Affichage key={i} malhafti = {malhafti} />
                )
                })
            }
        </div>
    )
}