import React, {useState} from 'react'

 const Add = ({add}) => {
    const [item, setItem] = useState('')
    return (
        <div>
            <input value={item} onChange={e => setItem(e.target.value)} />
            <button onClick={()=> {add(item); setItem('')}}>Add Item</button>
        </div>
    )
}

export default Add