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
     
            //Cloning the real basket
        let newBasket = [...state.basket]
        
        //Checking for the index of the product which is to be removed
        const index = state.basket.findIndex(basketItem => basketItem.id === action.id)
        
        //index>=0 => it means item is available in the basket which has to be removed.
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
        
        //basket:newbasket => it means first we created a copy
        // modified the basket(in this case, we removed the an item)
        //Finally, we update the basket with the modified basket(newBasket)
        return {...state,basket:newBasket}

        default:
            return state;
    }
}

export default reducer;