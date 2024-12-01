import { useParams } from "react-router-dom";
import { malhafti } from "../api/malhafti";
import NotFound from "./notfound";
import { useDispatch } from "react-redux";
import { added } from "./Actions";
import { useState } from "react";

export default function IdParam() {
    const { id } = useParams();
    const v = malhafti.malhafti.find((x) => x.id === parseInt(id));

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    function buy(e) {
        e.preventDefault();
        dispatch(added(v, quantity));
    } 

    return (
        <div className="container">
            <img src={v.image} alt="image not found" style={{ width: "250px" }} />
            <div>

                <p>{v.type}</p>
                <p>{v.category}</p>
                <p>{v.price}</p>

                <div>
                    <button className="btn btn-primary" onClick={buy}>شراء</button>
               {v?<p>{}</p>:<NotFound />}
                </div>
            </div>
        </div>
    );
}