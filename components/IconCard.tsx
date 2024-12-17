import React from 'react';

const IconCard = (props) => {
  return (
    <div className="card icon-card">
        <div className="card-body  p-3 md:p-4">
         <div className={`mb-4 ${props.icon} size-15`}></div>
        <h5 className="card-title mb-2.5 text-sm md:text-base">{props.name}</h5>
        </div>
    </div>
  )
}

export default IconCard