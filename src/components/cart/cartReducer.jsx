

function cartReducer(state, action) {



    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }



        case 'ADD_ITEM':

            const existingItem = state.cart.find(prod => prod.id == action.payload)
            if (existingItem) {
                // toast.success('Item Added!')
                return {
                    ...state,
                    cart:
                        state.cart.map(item => {
                            if (item.id == action.payload) {
                                return {
                                    ...item, qty: item.qty + 1
                                }
                            }
                            return item
                        }),
                    __QtyIncreased: existingItem

                }
            }
            else {
                const newItem = state.products.find(prod => prod.id == action.payload)
                if (newItem) {

                    return {
                        ...state,
                        cart: [
                            ...state.cart,
                            { ...newItem, qty: 1 }
                        ],
                        __NewItemAdded: newItem
                    }
                }


            }


        case 'REMOVE_ITEM':
            const itemToRemove = state.cart.find(item => item.id === action.payload)
            const updatedCart = state.cart.filter(item => item.id !== action.payload)

            if (itemToRemove) {
                return {
                    ...state,
                    cart: updatedCart,
                    __ItemRemoved: itemToRemove
                }

            }

        case 'CLEAR_NEWITEM':
            return {
                ...state,
                __NewItemAdded: null
            }


        case 'CLEAR_REMOVEITEM':
            return {
                ...state,
                __ItemRemoved: null
            }

        case 'CLEAR_QtyIncreased':
            return {
                ...state,
                __QtyIncreased: null
            }

        case 'CLEAR_CLEARCART':
            return {
                ...state,
                __ClearCartMsg: null
            }

        case 'CLEAR_CART':
            if (state.cart.length == 0) {
                return {
                    ...state,
                    __ClearCartMsg: 'Cart is already empty!'
                }
            }
            else {
                return {
                    ...state,
                    cart: [],
                    __ClearCartMsg: 'Cart cleared successfully!'
                }

            }

        case 'QTY_INC':
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, qty: item.qty + 1 }
                    }
                    return item
                })
            }

        case 'QTY_DEC':
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        if (item.qty == 1) {
                            return item
                        }
                        else {
                            return { ...item, qty: item.qty - 1 }

                        }
                    }
                    return item
                })
            }

        case 'GET_TOTAL':
            let newTotal = state.cart.reduce((acc, item) => {
                let { qty, price } = item
                let totalPricePerItem = qty * price

                acc.totalPrice += totalPricePerItem
                acc.totalQty += qty

                return acc
            }, { totalPrice: 0, totalQty: 0 })

            return {
                ...state,
                totalAmount: newTotal.totalPrice,
                totalQty: newTotal.totalQty
            }

        case 'GET_CART_FROM_CURRENT_USER':

            return {
                ...state,
                cart: action.payload
            }


        default:
            break;
    }
}

export default cartReducer