import React from 'react'; 


export default function Card ({title, text, image}) { // one react component: three props: title, text, and image
    return (
      <div className="card">
          <h2>{title}</h2>
          <p> {text}</p>
          <figure> 
            <img src={image} />
            <figcaption>Photo by NASA!! </figcaption>
          </figure>
        </div>
    )
  }