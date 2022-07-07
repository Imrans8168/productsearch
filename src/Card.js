import React, { useEffect, useState } from 'react'
import "./card.css"
import data from './data'
const Card = () => {
   

    
    const [output,setOutput] = useState(data)
    const [input,setInput] = useState("");

    useEffect(()=>{
        setOutput([]);
        data.filter((val)=>{
            if(val.title.toLowerCase().includes(input.toLowerCase()))
            setOutput(output=>[...output,val]);
        })
    },[input])
   
    console.log(data)
    console.log(input)
  return (
    <>
    <div className='headercontainer'>
       <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={e=>setInput(e.target.value)} aria-label="Search"/>
      
      </div>
        <div className='container'>
      
            {
                output.map((val,ind)=>{
                    return(
                        <div className="card cardcustom" key={ind} style={{width: "10rem" ,height:"auto"}}>
                            <img className="card-img-top imgcss" src={val.img} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                                <p className="card-text">{val.price}</p>
                                <a href="/" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    )
                })
            }

          
        </div>
    </>
  )
}

export default Card



// data.filter((val)=>{
//     if(input==""){
//         return val;
//     }
//     else if (val.title.toLowerCase().includes(input.toLowerCase())) {
//     return val
//     }
// }).map((val,ind)=>{