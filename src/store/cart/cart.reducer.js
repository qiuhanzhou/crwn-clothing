const initState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'cart/SET_CURRENT_USER':
      return { ...state, currentUser: action.payload }

    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}

//
