import { useState } from "react";

function PutTogether(props) {
    const {firstName, lastName, age:ageProps, Haircolor } = props
    const [age,setAge] = useState(ageProps)
   
    return(
       <div className="card">
         <h1>{firstName} {lastName}</h1>
         <p>age: {age}</p>
         <p>Haircolor: {Haircolor}</p>
         <button onClick={(e)=>setAge(age+1)}>  "Birthday Button for Jane Doe"</button>
        
       </div>
       
    )
}
export default PutTogether;