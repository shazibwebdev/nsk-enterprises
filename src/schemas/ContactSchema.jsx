import React from 'react'
import * as Yup from 'yup'

export const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(3, 'Minimum 3 characters'),

    email: Yup.string()
        .email('Enter valid email (abc@xyz.com)')
        .required('Email is required'),

    phone: Yup.string()
        .notRequired()
        .matches(/^(\+92|92|0)?[3][0-9]{9}$/, {
            message: 'Enter valid phone number',
            excludeEmptyString: true
        }),

    subject: Yup.string()
        .required('Subject is required'),

    message: Yup.string()
        .required('Message is required')

})
