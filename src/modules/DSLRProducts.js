export const GET_PRODUCTS = 'events.GET_PRODUCTS'


// Reducer
const initialState = {
    products: {
    regularPrice: "",
        name: ""
    }
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                fetchStatus: true
            }

        default:
            return state
    }
}

// Action Creators
function getProducts() {
    return {
        type: GET_PRODUCTS,
    }
}
