import { useEffect } from "react";
import { useState } from "react";
import "../css/Carousel.css";


function Carousel({ testimony }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3000);
  });

  const slideRight = () => {
    setCurrent(current === testimony.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? testimony.length - 1 : current - 1);
  };

  return (
    
    <div
    
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}

      
    >
       <div className="line">
             <img src="/Deco-line.png" alt="" />
             </div>
             <div className="colon-1">
             <img src="/colon1.png" alt="" />
             </div>
      <div className="carousel_wrapper">
        {testimony.map((test, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel_card carousel_card-active"
                : "carousel_card"
            }
          >
           
             <div>
            <h1>{test.title}</h1>
            <h1 className="second-h1">{test.subtitle}</h1>
            </div>
            <p>{test.text}</p>
           
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={slideLeft}>
        <img src="/Btn-left.png" alt="" />
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
        <img src="/testimonyright.png" alt="" />
        </div>
       
      </div>
      <div className="colon-2">
             <img src="/colon2.png" alt="" />
             </div>
      <div className="carousel_pagination">
          {testimony.map((test, index) => (
           <div key={index} className="pagination_item">
           <img
             src={test.image}
             alt={`Pagination Dot ${index}`}
             className={
               index === current
                 ? "pagination_dot pagination_dot-active"
                 : "pagination_dot"
             }
             onClick={() => setCurrent(index)}
           />
           <img src={test.star} alt="" />
           <h2 className="pagination_name">{test.name}</h2>
           <p className="pagination_company">{test.company}</p>
         </div>
       ))}
        </div>
    </div>
  );
}

export default Carousel;