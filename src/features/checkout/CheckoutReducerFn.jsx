export const checkoutReducerFn = (state, action) => {
  switch (action.type) {

    //  When shipping option changes
    case 'SET_SHIPPING_OPTION': {
      const shippingCost = (action.payload === 'Standard')
        ? (state.subtotal >= 100 ? 0 : 5)
        : 12;

      const grandTotal = state.subtotal - (state.subtotal * (state.discount / 100)) + shippingCost;

      return {
        ...state,
        shippingOption: action.payload,
        shippingCost,
        grandTotal
      };
    }

    //  When coupon changes
    case 'SET_COUPON': {
      const discount = action.payload === 'SAVE10'
        ? 10
        : action.payload === 'SAVE20'
          ? 20
          : action.payload === '' && 0;

      // console.log(discount);
      // console.log(state.subtotal + state.shippingCost);
      // console.log(state.subtotal * (discount / 100), 'discount');
      let total = state.subtotal + state.shippingCost
      
      const grandTotal = total - (total * (discount / 100));
      console.log(grandTotal);
      
      return {
        ...state,
        coupon: action.payload,
        discount,
        grandTotal
      };
    }
    
    case 'CLEAR_COUPON':
      let discount = 0
      const grandTotal = state.subtotal - (state.subtotal * (discount / 100)) + state.shippingCost;
      return {
        ...state,
        discount: discount,
        grandTotal: grandTotal
      };


    //  When cart subtotal changes
    case 'UPDATE_SUBTOTAL': {
      const shippingCost = (state.shippingOption === 'Standard')
        ? (action.payload >= 100 ? 0 : 5)
        : 12;

      const grandTotal = action.payload - (action.payload * (state.discount / 100)) + shippingCost;

      return {
        ...state,
        subtotal: action.payload,
        shippingCost,
        grandTotal
      };
    }

    default:
      return state;
  }
};
