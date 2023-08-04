import { useContext } from "react"
import {PlusIcon, CheckIcon} from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../components/Context'


const Card = ({ id, images, category, price, title, data }) => {

    const context = useContext(ShoppingCartContext)

    const showProduct = (product) => {
        context.productDetailOpen()
        context.setProductToShow(product)
        context.checkCartSideMenuClose()
    }

    const showProductCart = (event, productCartDetail) => {
        event.stopPropagation()
        context.setCount(context.count +1)
        context.setProductCart([... context.productCart, productCartDetail])
        context.checkCartSideMenuOpen()
        context.productDetailClose()
    }

    const renderIcon = (renderCard) => {

        const markIcon = context.productCart.filter((product) => product.id === renderCard).length

            if (markIcon > 0) {
                return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="h-6 w-6 text-white"/>
                </div>
                )
            } else {
                return (
                <div 
                    onClick={(event) => showProductCart(event, data)}
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    <PlusIcon className="h-6 w-6 text-black-500"/>
                </div>
                )
            }
        
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <img className="w-full h-full object-cover rounded-lg" src={images} alt="" />
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category}</span>
                {renderIcon(data.id)}
            </figure>
            
            <div className="flex justify-between items-center">
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium">${price}</span>
            </div>
        </div>
    )
}

export default Card