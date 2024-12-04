import { useParams } from "react-router-dom";
import { malhafti } from "../api/malhafti";
import NotFound from "./notfound";
import { useDispatch } from "react-redux";
import { added } from "./Actions";
import { useState } from "react";
import BackToTopButton from "./BackToTopButton";

export default function IdParam() {
    const { id } = useParams();
    const v = malhafti.malhafti.find((x) => x.id === parseInt(id));

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(e) {
        const value = Math.max(1, parseInt(e.target.value));
        setQuantity(value);
    }

    function buy(e) {
        e.preventDefault();
        dispatch(added(v, quantity));  // Dispatching item and quantity to Redux
    }

    {v?<p>{}</p>:<NotFound />}


    return (
        <>
            <div className="product-container">
                <div className="product-content">
                    <div className="product-details">
                        <h2>{v.type}</h2>
                        <p><strong>الفئة:</strong> {v.category}</p>
                        <p><strong>السعر:</strong> {v.price * 38} أوقية</p>

                        <div className="quantity-container">
                            <label htmlFor="quantity">الكمية: </label>
                            <input 
                                type="number" 
                                id="quantity" 
                                min="1" 
                                value={quantity} 
                                onChange={handleQuantityChange} 
                            />
                        </div>

                        <button className="btn btn-primary" onClick={buy}>شراء</button>
                    </div>

                    <div className="product-image">
                        <img src={v.image} alt="Image not found" className="product-img" />
                    </div>
                </div>
            </div>
            <BackToTopButton />
        </>
    );
}
