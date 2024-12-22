import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
    order: OrderItem[],
    dispatch: React.Dispatch<OrderActions>
}

export default function OrderContents({order, dispatch}: OrderContentsProps) {
  return (
    <div>
        <h2 className=' font-black text-4xl'>Consumo</h2>
        <div className="space-y-3 mt-10">
            {
                (order.map(item => (
                    <div 
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b"
                    >
                        <div>
                        <p className=" text-lg">
                            {item.name} - { formatCurrency(item.price * item.quantity)}
                        </p>
                        <p className="font-black">
                            {item.quantity}
                        </p>
                        </div>
                        <button 
                            className=" bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-800"
                            onClick={ () => dispatch({ type:'remove-item', payload: { id: item.id } }) }
                        >
                            X
                        </button>
                    </div>
                )))
            }
        </div>
    </div>
  )
}
