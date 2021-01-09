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
        if(index>=0){
            //item has to be removed.
            newBasket.splice(index,1);
        }
        else{
            console.warn(
                `Can't remove product: ${action.id} as it is not 
                in the basket.`
            )
        }
        return {...state} 
        default:
            return state;
    }
}

export default reducer;