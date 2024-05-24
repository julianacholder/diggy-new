import React from 'react';
import "../css/dev.css";

function Development({ development }) {
  // Divide the development array into two parts
  const leftSide = development.slice(0, 3);
  const rightSide = development.slice(3);

  return (
    <>
      <section className='design-development'>
        <div className='line-header'>
          <div>
            <img src="/Deco-line.png" alt="Deco Line" />
          </div>
          <h1>Our design and</h1>
          <h1 className='second-header'>development approach</h1>
        </div>

        <div className='development-content'>
          <div className='left-side'>
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
          </div>

          <div className='right-side'>
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
        </div>
      </section>
    </>
  );
}

export default Development;



