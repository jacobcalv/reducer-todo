import React, {useState} from 'react'
import styled from 'styled-components'
import '../index.css'

 const Add = ({add}) => {
    const [item, setItem] = useState('')
    const Button = styled.button`
        border-radius: 5%;
        height: 2rem;
        font-size: 1rem;
        text-align: center;
        background-color: black;
        color: white;
    `

    return (
        <div className='area'>
            <input value={item} onChange={e => setItem(e.target.value)} />
            <Button onClick={()=> {add(item); setItem('')}}>Add Item</Button>
        </div>
    )
}

export default Add