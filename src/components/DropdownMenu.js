import React, {useState, useRef} from 'react'

const DropdownMenu = () => {

    const dropdownRef = useRef(null); 
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive); 

    return (
       <div className='menu-container'>
           <button onClick={onClick} className="menu-trigger">
               <span>User</span>
           </button>
       </div>
    )
}

export default DropdownMenu