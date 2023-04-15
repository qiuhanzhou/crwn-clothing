import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  addItem: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  //product: {id, name, imageurl, price}
  //cartitems: [{id, name, imageurl, price, qty}]

  const addItemToCart = (productToAdd) => {
    // if product already exists in cart, increase qty by 1

    // const existingCartItemIndex = cartItems.findIndex(
    //   (cartItem) => cartItem.id === productToAdd.id,
    // )
    // if (existingCartItemIndex !== -1) {
    //   const left = cartItems.slice(0, existingCartItemIndex)
    //   const right = cartItems.slice(existingCartItemIndex + 1)

    //   setCartItems([
    //     ...left,
    //     {
    //       ...cartItems[existingCartItemIndex],
    //       quantity: cartItems[existingCartItemIndex].quantity + 1,
    //     },
    //     ...right,
    //   ])
    // }

    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id,
    )
    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      )
    }
    //if not, add current item in cart and set qty to 1
    else {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }])
    }
  }

  const removeItem = (cartItem) => {
    //if current qty is 1, remove item from cart completely
    if (cartItem.quantity === 1) {
      clearItemFromCart(cartItem)
    }
    //else reduce qty by 1
    else {
      setCartItems(
        cartItems.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      )
    }
  }
  const addItem = (cartItem) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const clearItemFromCart = (cartItem) => {
    setCartItems(cartItems.filter((item) => item.id !== cartItem.id))
  }

  //update cart count based on cart items
  useEffect(() => {
    setCartCount(cartItems.reduce((acc, cur) => acc + cur.quantity, 0))
  }, [cartItems])

  //update cart total based on cart items
  useEffect(() => {
    setCartTotal(
      cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
    )
  }, [cartItems])

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,
    addItemToCart,
    removeItem,
    addItem,
    clearItemFromCart,
    cartCount,
    setCartCount,
    cartTotal,
    setCartTotal,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
