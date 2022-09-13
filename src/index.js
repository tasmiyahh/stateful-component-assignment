import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'





const Room = () => {
  const [on , seton] = useState("on");
  return(
    <div className='body'>
    <div className='main'>
      
    <h1  > Light is {on} </h1> 
    <br/>
      
    <button className='green' onClick={()=> seton('on') }><FontAwesomeIcon icon={faPowerOff} color="green"  size="lg"/></button>
    <button className='red' onClick={()=>seton('off')} > <FontAwesomeIcon icon={faPowerOff} color="red"  size="lg"/> </button>
    

    
  

    </div>
    </div>
  )
}




ReactDOM.render(
<>
<Room /> 

</> , 
document.querySelector("#root"))
