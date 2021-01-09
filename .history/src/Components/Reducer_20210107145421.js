export const initialState={
    basket:[]
}

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
        // logic for adding item to the basket
        return {
            ...state,

        }  
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from the basket
        return {state} 
        default:
            return state;
    }
}

export default reducer;