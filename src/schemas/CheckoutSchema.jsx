import * as Yup from 'yup'

export const checkoutSchema = Yup.object().shape({
    username: Yup.string().required('Username is required')
        .min(3, 'Minimum 3 characters'),

    email: Yup.string().required('E-mail is required').email('Must be valid email (abc@xyz.com)'),

    shippingAddress: Yup.string().required('Shipping address is required'),

    paymentMethod: Yup.string().required('Select a payment method'),

    shippingOption: Yup.string().required('Select a shipping option'),

    coupon: Yup.string().notRequired()
        .test(
            'Valid coupon test',
            'Invalid coupon code',
            (value) => {
                if (!value) return true
                return /^(SAVE10|SAVE20)$/.test(value)
            }
        )


})