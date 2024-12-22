import { menuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type menuItemProps = {
    item: menuItem
    dispatch: React.Dispatch<OrderActions>
}


export default function MenuItem({item, dispatch} : menuItemProps) {

  return (
    <button className=" w-full border-2 border-teal-400 rounded p-3 flex justify-between hover:bg-teal-200"
        onClick={ () => dispatch({ type: 'add-item', payload: {item: item } }) }
    >
        <p>{item.name}</p>
        <p className=" font-black">${item.price}</p>
    </button>
)
}
