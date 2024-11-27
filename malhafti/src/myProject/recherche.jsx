import { useState } from "react";
import Affichage from "./Affichage";
import { malhafti as m } from "../api/malhafti";

export default function Input(){
   
   const [ input, setInput ] = useState("")
   const [ data, setData ] = useState([]) 

   function handle(e){
    e.preventDefault()
    setInput(e.target.value)
    setData(m.malhafti.filter((element)=>
        element.type.startsWith(e.target.value)
    ).map((element,i) => {
        return(
        <Affichage malhafti={element} key={i}/>
        )
    }))
   }
    return(
    <div>
      <form action="">
          <input type="text" onChange={(e) => handle(e)} />
          <p className="container" id="content">{data}</p>
      </form>
    </div>
    )
}