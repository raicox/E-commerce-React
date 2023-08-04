import { XMarkIcon } from "@heroicons/react/24/solid"


const OrderCard = ({ id, images, title, price, handleDelete }) => {

    let handleXMarkIcon 

    if(handleDelete) {
        handleXMarkIcon = <XMarkIcon 
        onClick={() => handleDelete(id)}
        className='h-6 w-6 text-black-600 cursor-pointer' />
    }

    return (
        <div className="flex justify-between items-center mb-2 px-3 ">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={images} alt="" />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {handleXMarkIcon}
            </div>
            
        </div>
    )
}

export default OrderCard