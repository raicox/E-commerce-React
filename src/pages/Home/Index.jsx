import { useContext } from 'react'
import { ShoppingCartContext } from '../../components/Context'
import Layaout from '../../components/Layaout/index'
import Card from '../../components/Card/index'
import ProductDetail from '../../components/ProductDetail'


function Home () {

    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.searchByItem?.length > 0) {
          if (context.filteredItems?.length > 0) {
            return (
              context.filteredItems?.map(item => (
                <Card key={item.id} images={item.images} price={item.price} category={item.category.name} title={item.title} data={item} />
              ))
            )
          } else {
            return (
              <div>
                <h1>We don't have anything :(</h1>
            </div>
            )
          }
        } else {
          return (
            context.items?.map(item => (
                <Card key={item.id} images={item.images} price={item.price} category={item.category.name} title={item.title} data={item} />
            ))
          )
        }
      }
    
    return (
       
        <Layaout>

            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Special Objects</h1>
            </div>

            <input 
                type="text"
                placeholder='Search Objects'
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                onChange={(event) => {context.setSearchByItem(event.target.value)}} />

            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {renderView()}
            </div>
            <ProductDetail/>
        </Layaout>
     
    )
}

export default Home