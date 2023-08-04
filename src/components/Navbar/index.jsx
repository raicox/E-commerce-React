import { NavLink } from 'react-router-dom'
import {ShoppingCartIcon} from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../components/Context'
import { useContext } from 'react'
 
function Nav () {

    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav  className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/Clothes'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/Electronics'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Furnitures'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Toys'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/Others'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    jsrodriguez049@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sing-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Sing In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                        <ShoppingCartIcon className='w-6 h-6 mr-1'/>
                        {context.productCart.length}
                </li>
            </ul>
        </nav>
    )
}

export default Nav