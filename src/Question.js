import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


function Question() {

const [showInfo,setShowInfo] = useState(false);

    return (
        <div className='question'>
            <header>
                <h4>این یک سوال است؟</h4>
                <button onClick={()=>setShowInfo(!showInfo)}>
                    <AiOutlinePlus />
                </button>
            </header>
            {
                showInfo && <p>این یک محتوا میباشد</p>
            }
        </div>
    )
}

export default Question