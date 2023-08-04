import { useContext } from "react"
import {XMarkIcon} from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../components/Context'
import './style.css'

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div  className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <span>
                <XMarkIcon 
                    className='h-6 w-6 text-black-600 cursor-pointer'
                    onClick={() => context.productDetailClose()}/>
            </span>
            </div>
            <figure  className='px-6'>
                <img src={context.productToShow.images} alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>$ {context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>

            </p>
        </aside>
    )
}

export default ProductDetail