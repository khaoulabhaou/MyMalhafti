import { useDispatch, useSelector } from "react-redux";
import { deleted } from "./Actions";
import { useState } from "react";

export default function Panier() {
    const panier = useSelector((data) => data.panier);
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState({});

    const handle = (id, value) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const totals = panier.reduce((total, malhafti) => {
        return total += Number(malhafti.price*38) * Number(quantities[malhafti.id]);
    }, 0);

    return (
        <div className="container my-5" id="cart-container">
            <h2 className="text-center mb-4" id="cart-header">سلة المشتريات</h2>
            <div className="card shadow-sm" id="cart-card">
                <div className="card-body">
                    <table className="table table-bordered table-hover" id="cart-table">
                        <thead id="cart-table-header">
                            <tr>
                                <th id="product-column">المنتج</th>
                                <th id="price-column">السعر</th>
                                <th id="quantity-column">الكمية</th>
                                <th id="actions-column">الإجراء</th>
                            </tr>
                        </thead>
                        <tbody id="cart-table-body">
                            {panier.map((malhafti) => (
                                <tr key={malhafti.id}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={malhafti.image}
                                                alt={malhafti.type}
                                                style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                className="mr-3"
                                            />
                                        </div>
                                    </td>
                                    <td>{malhafti.price*38}</td>
                                    <td>
                                        <input 
                                            type="number" 
                                            value={quantities[malhafti.id] || 0}
                                            onChange={(e) => handle(malhafti.id, parseInt(e.target.value))} 
                                            min="1" 
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => dispatch(deleted(malhafti.id))} className="btn btn-danger">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="d-flex justify-content-between mt-4" id="total-section">
                        <h4 id="total-label">المجموع</h4>
                        <h4 id="total-price">{totals} أوقية</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}