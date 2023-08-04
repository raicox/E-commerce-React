import { useContext } from "react"
import {ShoppingCartContext} from '../../components/Context'
import { Link } from "react-router-dom"
import Layaout from '../../components/Layaout/index'
import OrdersCard from "../../components/OrdersCard"

function MyOrders() {
    const context = useContext(ShoppingCartContext)
  
    return (
      <Layaout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.price}
                totalProducts={order.totalProducts} />
            </Link>
          ))
        }
      </Layaout>
    )
  }

export default MyOrders