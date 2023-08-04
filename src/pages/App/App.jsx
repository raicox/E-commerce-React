import { useRoutes, BrowserRouter } from 'react-router-dom'
import ShoppingCartProvider from '../../components/Context'
import Home from '../Home/Index'
import MyAccount from '../MyAccount/Index'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import SingIn from '../SingIn/Index'
import Nav from '../../components/Navbar/index'
import Clothes from '../Clothes'
import Electronics from '../Electronics'
import Furnitures from '../Furnitures'
import Others from '../Others'
import './App.css'
import CheckCartSideMenu from '../../components/CheckCartSideMenu'

function AppLinks () {
let AppRoutes = useRoutes([
  {path:'/', element: <Home/>},
  {path:'all', element: <Home/>},
  {path:'my-account', element: <MyAccount/>},
  {path:'my-order', element: <MyOrder/>},
  {path:'my-orders', element: <MyOrders/>},
  {path:'my-orders/last', element: <MyOrder/>},
  {path: '/my-orders/:id', element: <MyOrder /> },
  {path:'sing-in', element: <SingIn/>},
  {path:'clothes', element: <Clothes/>},
  {path:'electronics', element: <Electronics/>},
  {path:'furnitures', element: <Furnitures/>},
  {path:'others', element: <Others/>}


]) 

return AppRoutes
}

function App() {

  return (
    <div className='App'>
      <ShoppingCartProvider>
      <BrowserRouter>
        <AppLinks/>
        <Nav/>
        <CheckCartSideMenu/>
      </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  )
}

export default App
