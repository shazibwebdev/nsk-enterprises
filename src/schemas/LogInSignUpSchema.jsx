
import * as Yup from 'yup'


export const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required.')
        .min(3, 'Minimum 3 characters.'),

    email: Yup.string()
        .required('E-mail is required.')
        .email('Must be valid Email (abc@xyz.com)'),

    password: Yup.string()
        .required('Password is required.')
        .matches(/[a-z]/, 'Must contain a lowercase letter.')
        .matches(/[A-Z]/, 'Must contain an uppercase letter.')
        .matches(/[0-9]/, 'Must contain a number.')
        .matches(/[^a-zA-Z0-9]/, 'Must contain a special character')
        .min(8, 'Minimum 8 characters.')
        .max(15, 'Maximum 15 characters.')
})

export const LogInSchema = Yup.object().shape({

    email: Yup.string()
        .required('E-mail is required.')
        .email('Must be valid Email (abc@xyz.com)'),

    password: Yup.string()
        .min(8, 'Minimum 8 characters.')
        .max(15, 'Maximum 15 characters.')
})

