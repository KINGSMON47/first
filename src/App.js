import React, { useState } from "react";

import { Icon } from "react-icons-kit";

import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'

import SingleQuestion from "./Question";
import data from './data'


function App() {


  const [type, setType] = useState("password")
  const [icon, setIcon] = useState(eye)
  const [questions, setQuestions] = useState(data);

  const handleClick = () => {
    if (type === "password") {
      setType("text");
      setIcon(eyeOff)
    } else {
      setType("password");
      setIcon(eye)
    }
  }

  return (

    <div className="wrapper">

      <div className="input-fields"><span>
        <Icon onClick={handleClick} icon={icon} size={20} />
      </span>
        <input type={type} />

      </div>
      <div className="container">
        <h3>سوالی داری؟</h3>
        <div className="info">
          {
            questions.map((question)=>{
              return <SingleQuestion key={question.id} {...question}/>
            })
          }
        </div>
      </div>
    </div>




  );
}

export default App;
