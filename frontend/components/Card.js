import React from 'react'; 
import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 10px;

  h2 {
    color: grey;
    font-size: 1.5rem;
    margin-bottom: 10px;

    &:hover {
      color: black;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: darkgray;
  }
`


export default function Card ({title, text, image}) { // one react component: three props: title, text, and image
    return (
      <StyledCard className="card">
          <h2>{title}</h2>
          <p> {text}</p>
          <figure> 
            <img src={image} />
            <figcaption>Photo by NASA!! </figcaption>
          </figure>
        </StyledCard>
    )
  }