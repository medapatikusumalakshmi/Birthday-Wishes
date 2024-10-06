import users from "./db";
import React, { useState } from "react";
import './style.css'
export default function GetData(){
let[set,setState]=useState(users)
   return(
    <>
    <div id="main1">
    <div id="main2">
     <h1>{set.length} Birthdays today</h1><br /> <br /> <hr />
     <div style={{marginBottom:"20px"}}>
     {set.map((x)=>{
        return(
            <div key={x.id}>
            <div id="main3">
            <img src={x.profile} alt='' style={{height:"60px",width:"60px",borderRadius:"50%"}}/>
         
            <div id="main4">
               <h5 id="main5">{x.name} <br/>
                  {x.age}
               </h5>
            </div>
            <br/>
            </div>
            </div>
        )}
        )}
     </div>
     <button id="main6" onClick={()=>setState([])}>Clear All</button>
     </div>
    </div>
    </>
   ) 
}