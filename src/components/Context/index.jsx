import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const productDetailOpen = () => setIsProductDetailOpen(true)
    const productDetailClose = () => setIsProductDetailOpen(false)

    const [productToShow, setProductToShow] = useState({})
    const [productCart, setProductCart] = useState([])

    const [isCheckCartSideMenuOpen, setIsCheckCartSideMenuOpen] = useState(false)
    const checkCartSideMenuOpen = () => setIsCheckCartSideMenuOpen(true)
    const checkCartSideMenuClose = () => setIsCheckCartSideMenuOpen(false)

    const [order, setOrder] = useState([])

    const [items, setItems] = useState(null)
    
    const [searchByItem, setSearchByItem] = useState(null)

    const [filteredItems, setFilteredItems] = useState(null)

    const filteringItems = (items, searchByItem) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByItem.toLowerCase()))
    }

    useEffect(() => {
        if(searchByItem) setFilteredItems(filteringItems(items,searchByItem))
    },[items,searchByItem])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
    

    return (
        <ShoppingCartContext.Provider
        value={{
            count, 
            setCount,
            isProductDetailOpen,
            productDetailOpen,
            productDetailClose,
            productToShow,
            setProductToShow,
            productCart,
            setProductCart,
            isCheckCartSideMenuOpen,
            setIsCheckCartSideMenuOpen,
            checkCartSideMenuOpen,
            checkCartSideMenuClose,
            order,
            setOrder,
            items,
            setItems,
            searchByItem,
            setSearchByItem,
            filteredItems,
            setFilteredItems,
           
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext }  
export default ShoppingCartProvider