import { createContext, useContext, useEffect, useReducer, useState } from "react";
import cartReducer from "../components/cart/cartReducer";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "../schemas/CheckoutSchema";
import { checkoutReducerFn } from "../features/checkout/CheckoutReducerFn";
import { useAuthContext } from "./AuthContext";
import products from "../data/products";


const CartContext = createContext()

export const CartProvider = ({ children }) => {



    const [isCartSbOpen, setIsCartSbOpen] = useState(false)


    const initialState = JSON.parse(localStorage.getItem('cartState')) || {
        products: [],
        cart: [],
        TotalQty: 0,
        TotalAmount: 0,
        __NewItemAdded: null,
        __QtyIncreased: null,
        __ItemRemoved: null,
        __ClearCartMsg: null
    }

    const [cartState, dispatch] = useReducer(cartReducer, initialState)


    // ====================================
    // ==== TO SET ALL PRODUCTS TO CART STATE ====
    // ====================================
    useEffect(() => {
        dispatch({ type: 'SET_PRODUCTS', payload: products })
    }, [])


    // ====================================
    // ==== TO SET CART STATE TO LOCAL STORAGE ====
    // ====================================
    useEffect(() => {
        localStorage.setItem('cartState', JSON.stringify(cartState))
        // console.log('cartState', cartState);
    }, [cartState])


    // ====================================
    // ==== TO SHOW ITEM ADDED TOAST ====
    // ====================================
    useEffect(() => {
        if (cartState.__NewItemAdded) {
            const newItem = cartState.__NewItemAdded

            toast.success(
                <>
                    <div className="font-semibold">
                        <span className="font-bold">{newItem.title}</span> added to Cart!
                    </div>
                    <button
                        className="accent cursor-pointer text-white p-1 mt-1 rounded"
                        onClick={() => { setIsCartSbOpen(true) }}>
                        View Cart
                    </button>
                </>

            )
            dispatch({ type: 'CLEAR_NEWITEM' })
        }
    }, [cartState.__NewItemAdded])


    // ====================================
    // ==== TO SHOW TOAST ON AUTO QUANTITY INCREASED  ====
    // ====================================
    useEffect(() => {
        if (cartState.__QtyIncreased) {
            toast.info(
                <>
                    <div>
                        Selected item's quantity increased by 1!
                    </div>
                    <button
                        className="primary cursor-pointer text-white p-1 mt-1 rounded"
                        onClick={() => { setIsCartSbOpen(true) }}>
                        View Cart
                    </button>
                </>

            )
            dispatch({ type: 'CLEAR_QtyIncreased' })
        }
    }, [cartState.__QtyIncreased])


    // ====================================
    // ==== TO SHOW ITEM REMOVED TOAST ====
    // ====================================
    useEffect(() => {
        if (cartState.__ItemRemoved) {
            const newItem = cartState.__ItemRemoved

            toast.info(
                <>
                    <div className="font-semibold">
                        <span className="font-bold">{newItem.title}</span> removed from your Cart!
                    </div>
                    <button
                        className="primary cursor-pointer text-white p-1 mt-1 rounded"
                        onClick={() => { setIsCartSbOpen(true) }}>
                        View Cart
                    </button>
                </>

            )
            dispatch({ type: 'CLEAR_REMOVEITEM' })
        }
    }, [cartState.__ItemRemoved])



    // ====================================
    // ==== TO SHOW CART CLEARED TOAST ====
    // ====================================
    useEffect(() => {
        if (cartState.__ClearCartMsg) {
            const msg = cartState.__ClearCartMsg

            toast.info(
                <>
                    <div>
                        {msg}
                    </div>
                    <button
                        className="primary cursor-pointer text-white p-1 mt-1 rounded"
                        onClick={() => { setIsCartSbOpen(true) }}>
                        View Cart
                    </button>
                </>

            )
            dispatch({ type: 'CLEAR_CLEARCART' })
        }
    }, [cartState.__ClearCartMsg])


    // ====================================
    // ==== TO GET TOTAL ====
    // ====================================
    useEffect(() => {
        dispatch({ type: 'GET_TOTAL' })
    }, [cartState.cart])



    // ====================================
    // ==== ACTIONS FOR REDUCER FUNCTION ====
    // ====================================
    const ADD_ITEM = (id) => {
        dispatch({ type: 'ADD_ITEM', payload: id })
    }

    const REMOVE_ITEM = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }

    const QTY_INC = (id) => {
        dispatch({ type: 'QTY_INC', payload: id })
    }

    const QTY_DEC = (id) => {
        dispatch({ type: 'QTY_DEC', payload: id })
    }

    const CLEAR_CART = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const GET_TOTAL = () => {
        dispatch({ type: 'GET_TOTAL' })
    }





    // ====================================
    // ==== CHECKOUT REACT HOOK FORM SETUP ====
    // ====================================
    const {
        register: checkoutRegister,
        handleSubmit: checkoutHandleSubmit,
        formState: { errors: checkoutErros, isValid: isCheckoutFormValid },
        reset: checkoutReset
    } = useForm({
        resolver: yupResolver(checkoutSchema),
        defaultValues: {
            paymentMethod: 'Cash on Delivery',
            shippingOption: 'Standard',
        },
        mode: 'onChange'

    })


    const checkoutInitialState = {
        shippingOption: 'Standard',
        shippingCost: cartState.totalAmount >= 100 ? 0 : 5,
        coupon: '',
        discount: 0,
        subtotal: cartState.totalAmount,
        grandTotal: cartState.totalAmount,
    };

    const [checkoutState, checkoutDispatch] = useReducer(checkoutReducerFn, checkoutInitialState);
    const [order, setOrder] = useState(null)
    const [IsOrderConfirmed, setIsOrderConfirmed] = useState(false)
    const [checkoutFormData, setCheckoutFormData] = useState(JSON.parse(localStorage.getItem('chechoutFormData')) || {})



    useEffect(() => {
        if (!IsOrderConfirmed) return
        setOrder(
            {
                formData: { ...checkoutFormData },
                orderDetail: { orderId: Date.now(), ...checkoutState, status: 'pending' },
                orderedProducts: [...cartState.cart]
            }
        )
    }, [IsOrderConfirmed])

    useEffect(() => {
        console.log('Order:', order);
        if (!order) return

        let allOrders = JSON.parse(localStorage.getItem('allOrders')) || []
        let updatedAllOrders = [...allOrders, order]
        localStorage.setItem('allOrders' , JSON.stringify(updatedAllOrders))
        setCheckoutFormData({
            ...checkoutFormData, paymentMethod: 'Cash on Delivery',
            shippingOption: 'Standard',
            coupon: ''
        })
        let timeout = setTimeout(() => {
            setOrder(null)
            let timeout1 = setTimeout(() => {
                CLEAR_CART()
            }, 1000);
        }, 9000);

    }, [order])

    useEffect(() => {
        localStorage.setItem('checkoutFormData', JSON.stringify(checkoutFormData))
        console.log('data changed of checkout');
    }, [checkoutFormData])


    useEffect(() => {
        checkoutDispatch({ type: 'UPDATE_SUBTOTAL', payload: cartState.totalAmount });
    }, [cartState.totalAmount]);

    useEffect(() => {
        if (cartState.cart.length < 1) {
            checkoutDispatch({ type: 'SET_SHIPPING_OPTION', payload: 'Standard' });
            checkoutDispatch({ type: 'SET_COUPON', payload: '' });
        }
    }, [cartState.cart]);

    const onCheckoutSubmit = (data) => {
        console.log('checkout data:', data);
        setCheckoutFormData({ ...data })

        checkoutDispatch({ type: 'SET_SHIPPING_OPTION', payload: data.shippingOption });

        if (data.coupon) {
            checkoutDispatch({ type: 'SET_COUPON', payload: data.coupon });
        }
        else {
            checkoutDispatch({ type: 'CLEAR_COUPON' });
        }

    };






    return (
        <CartContext.Provider value={{
            isCartSbOpen,
            setIsCartSbOpen,
            cartState,
            ADD_ITEM,
            REMOVE_ITEM,
            QTY_INC,
            QTY_DEC,
            CLEAR_CART,
            dispatch,

            checkoutRegister,
            checkoutHandleSubmit,
            checkoutReset,
            checkoutErros,
            onCheckoutSubmit,
            isCheckoutFormValid,

            checkoutState,
            checkoutFormData,
            IsOrderConfirmed,
            setIsOrderConfirmed,
            order,

        }}>
            {children}
        </CartContext.Provider>

    )

}

export const useCartContext = () => {
    return useContext(CartContext)
} 