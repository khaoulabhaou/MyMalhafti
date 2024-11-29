import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ajouter } from "./Actions";

export default function Malhafti(props) {
    const { id } = useParams();
    const malhafti = props.malhafti.find((pro) => pro.id === id);

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function buy(e) {
        e.preventDefault();
        dispatch(ajouter({...malhafti, quantity: parseInt(quantity)})); // Dispatch with quantity
        navigate('/panier');
    }

    return (
        <>
            <p>{malhafti.title}</p>
            <form onSubmit={buy}>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                />
                <button className="btn btn-success">شراء</button>
            </form>
            <button onClick={() => setQuantity(parseInt(quantity) + 1)}>+</button>
            <button onClick={() => setQuantity(parseInt(quantity) - 1)}>-</button>
        </>
    );
}
