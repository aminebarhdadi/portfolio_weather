import React from 'react'

const Card = (props) => {
  return (
    <div className="card hover:scale-105 transition  duration-150 ease-out">
        <figure className=" aspect-[5/3]">
        <img className="w-full h-full object-cover" src={props.image} alt={props.title} width={800} height={800}/>
         </figure>
        <div className="card-body">
        <h5 className="card-title mb-2.5">{props.title}</h5>
        {props.desc && (<p className="mb-4">{props.desc}</p>)}
        </div>
    </div>
  )
}

export default Card