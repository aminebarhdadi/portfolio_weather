import React from 'react';

const CallToAction = (props) => {
  return (
    <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">{props.title}</h2>
        <p className="text-lg text-white mb-8 max-w-lg mx-auto">
          {props.desc}
        </p>
        <a
          href={props.link}
          className="btn hover:text-white hover:border-white text-slate-900 bg-white hover:bg-transparent transition duration-75"
        >
          {props.button}
        </a>
    </div>
    
  )
}

export default CallToAction