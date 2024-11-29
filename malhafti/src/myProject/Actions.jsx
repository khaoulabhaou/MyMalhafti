export const added = (malhafti,quantity) => {
    return { type : "added" , payload:malhafti,quantity:quantity}
}

export const deleted = (id) =>{
    return{ type : "deleted",payload:id}
}