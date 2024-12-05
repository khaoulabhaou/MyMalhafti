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

    function buy(e) {
        e.preventDefault();
        const product={id : v.id, type : v.type, size : v.size, price : v.price,  quantity : parseInt(quantity)}
        dispatch(added(product)); 
        console.log(product);
        
    }

    {v?<p>{}</p>:<NotFound />}


    return (
        <>
            <div className="product-container">
                <div className="product-content">
                    <form onSubmit={buy} className="form">
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
                                onChange={e => setQuantity(e.target.value)} 
                            />
                        </div>

                        <button className="btn btn-primary">شراء</button>
                    </div>
                    </form>

                    <div className="product-image">
                        <img src={v.image} alt="Image not found" className="product-img" />
                    </div>
                </div>
            </div>
            <BackToTopButton />
        </>
    );
}
