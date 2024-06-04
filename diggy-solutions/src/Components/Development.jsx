import React from 'react';
import "../css/dev.css";
import decoline from "../images/Deco-line.png"

function Development({ development }) {
  // Divide the development array into two parts
  const leftSide = development.slice(0, 3);
  const rightSide = development.slice(3);

  return (
    <>
      <section className='design-development'>
        <div className='line-header'>
          <div>
            <img src={decoline} alt="Deco Line" />
          </div>
          <h1>Our design and</h1>
          <h1 className='second-header'>development approach</h1>
        </div>

        <div className='development-content'>
          
            {leftSide.map((dev, index) => (
              <div key={index} className='development-card'>
                <div className={`dev-img img-${index}`}>
                  <img src={dev.image} alt={dev.title} />
                </div>
                <div className='title-text'>
                  <h1>{dev.title}</h1>
                  <p>{dev.text}</p>
                </div>
              </div>
            ))}
            

{rightSide.map((dev, index) => (
              <div key={index} className='development-card'>
                <div className={`dev-img img-${index + leftSide.length}`}>
                  <img src={dev.image} alt={dev.title} />
                </div>
                <div className='title-text'>
                  <h1>{dev.title}</h1>
                  <p>{dev.text}</p>
                </div>
              </div>
            ))}
          </div>
         

        
       
      </section>
    </>
  );
}

export default Development;



