import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


function Question({id,title , info}) {

const [showInfo,setShowInfo] = useState(false);

    return (
        <div  data-id={id} className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={()=>setShowInfo(!showInfo)} >
                    <div className={ `saeed ${showInfo ? 'rotate' : ''}`}>
                         {
                        showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
                    } 
                    </div>
                  
                </button>
            </header>
            {
                showInfo && <p>{info}</p>
            }
        </div>
    )
}

export default Question