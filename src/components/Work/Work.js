import React, {useState, useEffect} from 'react'
import All from './Content/All/All';
import Commercial from './Content/Commercial/Commercial';
import Cultural from './Content/Cultural/Cultural';
import Residential from './Content/Residential/Residential';
import './Work.css'

export default function Work() {


  let [Choice, setChoices] = useState(1)
 

  return (
<div id="all">
<div id="AllButtons">
<button  id="first" onClick={()=>{
setChoices(Choice=1);


}}> All</button> 
 <button id="second" onClick={()=>{
setChoices(Choice=2)

}}> Commercial</button> 
 <button id="third" onClick={()=>{
setChoices(Choice=3)

}}> Residential</button>
<button id="fourth" onClick={()=>{
setChoices(Choice=4)

}}> Commercial</button> 

</div>

<div id="AllVideos">
 {Choice===1 ? 
 <div> 
<All/>
 {console.log("first") }
 
 
 </div> :
 Choice===2 ? (
     <div id="all">
<Cultural/>
       {console.log("second") }
</div>
 

): Choice===3 ?
<div>
<Residential/>
        {console.log("third") }
    </div>: Choice===4 ? <div>
      <Commercial/>
     {console.log("fourth") }</div>:
console.log(Choice+" fuck you")
 }

 </div>





 </div>
)
}

