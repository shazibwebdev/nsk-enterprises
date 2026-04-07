import { createContext, useContext, useEffect, useState } from "react";
import products from "../data/products";

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [APIData, setAPIData] = useState([])
    const [categories, setCategories] = useState([])
    const [activeFilter, setActiveFilter] = useState('all')
    const [error, setError] = useState(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Derive unique categories from local products
        const uniqueCategories = [...new Set(products.map(p => p.category))]
        setCategories(uniqueCategories)
    }, [])

    const FetchData = async (filter) => {
        setLoading(true)
        setError(null)
        try {
            // Filter local products instead of hitting the API
            const filtered = filter === 'all' || !filter
                ? products
                : products.filter(p => p.category.toLowerCase() === filter.toLowerCase())
            setAPIData(filtered)
        } catch (err) {
            console.log(err.message)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }


    return (
        <AppContext.Provider value={{
            loading,
            setLoading,
            FetchData,
            APIData,
            categories,
            activeFilter,
            setActiveFilter,
            error,
            setError,
            isMobileMenuOpen,
            setIsMobileMenuOpen

        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}