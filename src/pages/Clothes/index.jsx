import { useContext } from "react"
import { ShoppingCartContext } from '../../components/Context'
import Layaout from "../../components/Layaout"
import Card from "../../components/Card"


const Clothes = () => {

    const context = useContext(ShoppingCartContext)

    const nameFiltered = () => {
        if(context.items) {
            return (
                context.items?.filter(item => item.category.name.includes('Clothes')).map(item => (
                    <Card 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    images={item.images}
                    price={item.price}
                    category={item.category.name}
                    data={item}/>
                ))
            )
        } else {
            return null
        }
        
    }
    
    return (
        <Layaout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Clothes</h1>
            </div>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {nameFiltered() }
            </div>
        </Layaout>
    )
}

export default Clothes