import { useContext } from "react"
import { Link } from "react-router-dom"  
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../components/Context'
import { TotalPrice } from '../../Utils/index'
import MyOrder from "../OrderCard"
import './style.css'


const CheckCartSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filterDelete = context.productCart.filter(product => product.id != id)
        context.setProductCart(filterDelete)
    }

    const handleCheckOut = () => {
        const orderAdd = {
            date: '31.07.23',
            products: context.productCart,
            totalProducts: context.productCart.length,
            price: TotalPrice(context.productCart)
        }

        context.setOrder([...context.order, orderAdd])
        context.setProductCart([])
    }

    return (
        <aside className={`${context.isCheckCartSideMenuOpen ? 'flex' : 'hidden'} check-cart-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div  className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <span>
                <XMarkIcon 
                    className='h-6 w-6 text-black-600 cursor-pointer'
                    onClick={() => context.checkCartSideMenuClose()}/>
            </span>
            </div>

            <div className="overflow-y-scroll flex-1">
                {
                context.productCart.map(product => {
                    return (
                        <MyOrder
                            key={product.id} 
                            id={product.id}
                            title={product.title} 
                            images={product.images} 
                            price={product.price}
                            handleDelete={handleDelete}/>
                    )
                })
             }
            </div>

            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-4'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${TotalPrice(context.productCart)}</span>
                </p>
                <Link to='my-orders/last'>
                    <button 
                        className='bg-black py-3 text-white w-full rounded-lg'
                        onClick={() => handleCheckOut()}
                    >
                    CheckOut
                    </button>
                </Link>
            </div>
            
        </aside>
    )
}

export default CheckCartSideMenu