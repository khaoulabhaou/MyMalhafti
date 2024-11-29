import { useDispatch, useSelector } from "react-redux";
import { deleted } from "./Actions";

export default function Panier() {
    const panier = useSelector((state) => state.panier);
    const dispatch = useDispatch();

    const totals = panier.reduce((total, malhafti) => {
        return total + malhafti.price * malhafti.quantity;
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
                                <tr key={malhafti.id} id={`item-${malhafti.id}`}>
                                    <td id={`product-${malhafti.id}`}>
                                        <div className="d-flex align-items-center" id={`product-detail-${malhafti.id}`}>
                                            <img
                                                src={malhafti.image}
                                                alt={malhafti.type}
                                                id={`product-image-${malhafti.id}`}
                                                style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                className="mr-3"
                                            />
                                            {malhafti.type}
                                        </div>
                                    </td>
                                    <td id={`price-${malhafti.id}`}>${malhafti.price.toFixed(2)}</td>
                                    <td id={`quantity-${malhafti.id}`}>{malhafti.quantity}</td>
                                    <td id={`action-${malhafti.id}`}>
                                        <button onClick={() => dispatch(deleted(malhafti.id))} className="btn btn-danger" id={`remove-button-${malhafti.id}`}>
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="d-flex justify-content-between mt-4" id="total-section">
                        <h4 id="total-label">المجموع</h4>
                        <h4 id="total-price">{totals}dh</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
