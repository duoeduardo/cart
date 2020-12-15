const reducer =(state, action) => {
    //Se pueden usar switch o varios if
    if (action.type === 'CLEAR_CART') {
        return {...state, cart:[]}
    }


    return state
}

export default reducer