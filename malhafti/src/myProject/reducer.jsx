import { configureStore } from '@reduxjs/toolkit';

const current_state = {
    panier: [],
}
const reducer = (state = current_state, action) => {
    switch (action.type) {
        case 'added':
            return {...state,panier: [...state.panier,
                    {
                        id: action.payload.id,
                        type: action.payload.type,
                        size: action.payload.size,
                        price: action.payload.price,
                        quantity: action.payload.quantity,
                    }
                ]
            }
        case 'deleted':
            return {
                ...state,
                panier: state.panier.filter((malhafti) => malhafti.id !== action.payload),
            }
        default:
            return state;
    }
}
const store = configureStore({
    reducer,
})
export default store
