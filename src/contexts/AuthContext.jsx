import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LogInSchema, SignUpSchema } from '../schemas/LogInSignUpSchema'
import { toast } from 'sonner'
import { json, useNavigate } from "react-router-dom";
import { useCartContext } from "./CartContext";
// import { useNavigate } from 'react-router-dom'




const AuthContext = createContext()

export const AuthProvider = ({ children }) => {


    const [isLoginActive, setIsLoginActive] = useState(false)

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    // const [shouldGetCurrentUserCart, setShouldGetCurrentUserCart] = useState(false)

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // const [cartState, setCartState] = useState([])

    // useEffect(()=>{
    //     setCartState(JSON.parse(localStorage.getItem('cartState')))
    // },[])




    // ====================================
    // ==== TO GET CURRENT USER ====
    // ====================================
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
        if (currentUser) {
            setIsAuthenticated(true)
        }
    }, [currentUser])


    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])


    const handleLogOut = () => {
        let currnetUserOrders = JSON.parse(localStorage.getItem('allOrders'))
        let updatedUser = { ...currentUser, allOrders: currnetUserOrders }
        let updatedUsers = users.filter(user => user.email !== currentUser.email)
        updatedUsers.push(updatedUser)
        localStorage.setItem('users', JSON.stringify(updatedUsers))
        setUsers(updatedUsers)
        setIsAuthenticated(false)
        setCurrentUser(null)
        navigate('/')
        toast.info('Logged out successfully.')
        localStorage.setItem('allOrders', JSON.stringify([]))
        localStorage.setItem('checkoutFormData', JSON.stringify({}))
    }

    // ====================================
    // ==== LOGIN SIGNUP HOOKFORM SETUP ====
    // ====================================

    const handleLoginClick = () => {
        setIsLoginActive(true)
    }

    const handleSignUpClick = () => {
        setIsLoginActive(false)
    }


    const {
        register: signUpRegister,
        handleSubmit: handleSignUpSubmit,
        reset: signUpReset,
        formState: {
            errors: signUpErrors,
            isSubmitting: signUpSubmitting
        }
    } = useForm({
        resolver: yupResolver(SignUpSchema)
    })

    const {
        register: logInRegister,
        handleSubmit: handlelogInSubmit,
        reset: logInReset,
        formState: {
            errors: logInErrors,
            isSubmitting: logInSubmitting
        }
    } = useForm({
        resolver: yupResolver(LogInSchema)
    })


    // ====================================
    // ==== LOGIN SIGNUP SUBMIT FUNCTIONS ====
    // ====================================
    const onSignUpSubmit = (data) => {
        console.log('signup data: ', data)

        let users = JSON.parse(localStorage.getItem('users')) || []
        let existingUser = users.find(user => user.email == data.email)
        if (existingUser) {
            toast.error(`this "${data.email}"  email is already taken!`)
        } else {
            toast.success('Account created successfully 🎉. Please Log In now')
            setIsLoginActive(true)
            users.push(data)
            localStorage.setItem('users', JSON.stringify(users))
            signUpReset()
        }
    }

    const navigate = useNavigate()

    const onLogInSubmit = (data) => {
        console.log('login data: ', data)

        let users = JSON.parse(localStorage.getItem('users')) || []
        let userFound = users.find(user => user.email == data.email)

        if (userFound) {
            if (userFound.password === data.password) {
                toast.success(`Welcome Back ${userFound.username}`)
                setCurrentUser(userFound)
                if (userFound.allOrders) {
                    localStorage.setItem('allOrders', JSON.stringify(userFound.allOrders))
                }
                // setShouldGetCurrentUserCart(true)
                navigate('/')
                logInReset()
            }
            else {
                toast.error(`Incorrect Password!`)
            }
        } else {
            toast.error(`No account found with "${data.email}" email!`)
        }


    }


    return (
        <AuthContext.Provider value={{
            isLoginActive,
            setIsLoginActive,
            handleLoginClick,
            handleSignUpClick,
            signUpRegister,
            handleSignUpSubmit,
            signUpErrors,
            signUpSubmitting,
            onSignUpSubmit,

            logInRegister,
            handlelogInSubmit,
            logInErrors,
            logInSubmitting,
            onLogInSubmit,

            isAuthenticated,
            currentUser,
            setCurrentUser,
            handleLogOut,

        }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuthContext = () => {
    return useContext(AuthContext)
}