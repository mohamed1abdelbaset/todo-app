import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
    const {items, deleteItem} = props
    let length = items.length
    const listItems = length ? (
        items.map(item => {
            return(
                <div className="listitems" key={item.id}>
                   
                            <span>{item.todo}</span>
                            <span className="del" onClick={()=>deleteItem(item.id)} >&times;</span>
                       
                </div>
            )
        })
    ) : (
        <div>there is no items to show</div>
    )
    return (
        <div>
            {listItems}
        </div>
    );
}
 
export default TodoItem;