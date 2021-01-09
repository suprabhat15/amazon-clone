export const initialState={
    basket:[]
}

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
        // logic for adding item to the basket
        return {
            ...state,
            basket:[...state.basket,action.item]
        }  
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from the basket
        let newBasket = [...state.basket]
        const index = state.basket.findIndex(basketItem => basketItem.id === action.id)
        return {...state} 
        default:
            return state;
    }
}

export default reducer;