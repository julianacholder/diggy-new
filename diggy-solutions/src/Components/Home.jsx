import React from 'react'
import  { useEffect } from 'react';
import Slider from "react-slick";
import "./Navbar";
import "../css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel"
import { testcard } from "./Data";
import { development } from "./Data";
import Development from './Development';
import Footer from "./Footer";
import Logos from './Logos';




function Home() {
  useEffect(() => {
    const logosSlide = document.querySelector(".img-readmore");
    const copy = logosSlide.cloneNode(true);
    document.querySelector(".slider-image").appendChild(copy);
  }, []);

  
  const settings = {
    dots: true,
    infinite: true, // Change to true for infinite looping
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      <section className='hero-section'>
        <div className='hero-text'>
          <div>
          <h1>Great <span>Product</span> is </h1>
          <h2>built by great <span>teams</span></h2>
          </div>
        <p>
        We help build and manage a team of world-class 
         developers <br />to bring your vision to life
        </p>

        <a href="">Let's get started</a>
        </div>
      <img src="/hero.png" alt="" />
      </section>
      <div className='ball'>
      <img src="/ball.png" alt="" />
      </div>


      <section className='services'>
       <h2 className='services-header'>Services we offer</h2>
       <div className="components slider-container">
       <Slider {...settings}>
       <div className='text-card'>
        <img src="/image1.png" alt="" />
        <h1>Web Design & Development</h1>
        <p>A Website is an extension of yourself and we 
          can help you to express it properly.
           Your website is your number one marketing asset
            because we live in a digital age.</p>
       </div>
      
       <div className='text-card'>
        <img src="/image1.png" alt="" />
        <h1>Software Testing Service</h1>
        <p>A Website is an extension of yourself and we 
          can help you to express it properly.
           Your website is your number one marketing asset
            because we live in a digital age.</p>
       </div>

       <div className='text-card'>
        <img src="/image1.png" alt="" />
        <h1>Mobile App Development</h1>
        <p>A Website is an extension of yourself and we 
          can help you to express it properly.
           Your website is your number one marketing asset
            because we live in a digital age.</p>
       </div>

       <div className='text-card'>
        <img src="/image1.png" alt="" />
        <h1>Business Consultancy</h1>
        <p>A Website is an extension of yourself and we 
          can help you to express it properly.
           Your website is your number one marketing asset
            because we live in a digital age.</p>
       </div>

       <div className='text-card'>
        <img src="/image1.png" alt="" />
        <h1>Web Design & Development</h1>
        <p>A Website is an extension of yourself and we 
          can help you to express it properly.
           Your website is your number one marketing asset
            because we live in a digital age.</p>
       </div>
       </Slider>
       </div>
      </section> 

      

     



      <section>
      <div className='ball2'>
      <img src="/ball.png" alt="" />
      </div>
      <div className='text-vid'>
      <div className="trust-us">
        
        <div className='line-header'>
          <div>
        <img src="/Deco-line.png" alt="" />
        </div>
          <h1>Leading companies trust us
            <br />
             <span>to develop software</span></h1>
        </div>
        <p>We <span>add development capacity</span> to tech teams. Our value isn’t 
        limited to building teams but is equally distributed across the project lifecycle.
           We are a custom software development company that guarantees the successful 
           delivery of your project.</p>
           <div className='see-more'>
           <h5>See more Informations  </h5>
           <img src="/arrow.png" alt="" />
           </div>

         
      </div>
       <div className='trust'>
      <img  className="responsive"  src="/About-us-Video.png" alt="" />
      </div>
      </div>
      </section>

      <section className='meet-the-people'>
      <div className='line-header'>
          <div>
        <img src="/Deco-line.png" alt="" />
        </div>
          <h1>Meet the People
            <br />
             <span>We are Working With</span></h1>
        </div>
        <div className='ball3'>
      <img src="/ball.png" alt="" />
      </div>

      <p className='arrows'>
      
      </p>

      <Logos />
      </section>
    

      <Carousel testimony={testcard} />

      <section className='projects'>
        <div className='small-ball'>
        <img src="/images/Ellipse.png" alt="" />
        </div>
      <div className='line-header'>
          <div>
        <img src="/Deco-line.png" alt="" />
        </div>
          <h1>Our recent</h1>
          <h1 className='second-header'>Projects</h1>
        </div>

        <div className='projects-text'>
          <div className='project-card'>
          <div className='card-img'>
            <img src="/images/project1.png" alt="" />
            </div>
            <div className='text-only'>
            <h1>Website Design for SCFC Liberia</h1>
            <p>Born out of a vision, a single-minded objective 
              that puts service before anything else, Swift Clearance 
              and Forwarding Corp. surging forth to deliver the best
               services in the shipping and logistics scenario.
                Its meteoric rise stems out of a solid foundation. 
                The management boasts of over 20 years of rich and varied experience
               in the shipping and freight forwarding industry.</p>
              <div className="read-more">
            <a href="">Read more</a>
            <img src="/images/read-more.png" alt="" />
            </div>
            </div>
          </div>

          <div className='project-card2'>
            <div className='card-img'>
            <img src="/images/project2.png" alt="" />
            </div>
            <div className='text-only'>
            <h1>Website Design for SCFC Liberia</h1>
            <p>Born out of a vision, a single-minded objective 
              that puts service before anything else, Swift Clearance 
              and Forwarding Corp. surging forth to deliver the best
               services in the shipping and logistics scenario.
                Its meteoric rise stems out of a solid foundation. 
                The management boasts of over 20 years of rich and varied experience
               in the shipping and freight forwarding industry.</p>
               <div className="read-more">
            <a href="">Read more</a>
            <img src="/images/read-more.png" alt="" />
            </div>
            </div>
          </div>
          <div className='project-card3'>
          <div className='card-img'>
            <img src="/images/project3.png" alt="" />
            </div>
            <div className='text-only'>
            <h1>Website Design for SCFC Liberia</h1>
            <p>Born out of a vision, a single-minded objective 
              that puts service before anything else, Swift Clearance 
              and Forwarding Corp. surging forth to deliver the best
               services in the shipping and logistics scenario.
                Its meteoric rise stems out of a solid foundation. 
                The management boasts of over 20 years of rich and varied experience
               in the shipping and freight forwarding industry.</p>
               <div className="read-more">
            <a href="">Read more</a>
            <img src="/images/read-more.png" alt="" />
            </div>
            </div>
          </div>
          <div className='see-more'>
         <a href="">See more Projects</a>
         <img className='see-more-img' src="/images/see-more.png" alt="" />
         </div>
        </div>
      </section>

      <section className='team'>
      <div className='line-header'>
          <div>
        <img src="/Deco-line.png" alt="" />
        </div>
          <h1>Way of building</h1>
          <h1 className='second-header'>Great Software</h1>
        </div>

        <div className="team-text">
          <div className="team-content">
            <h1>Build the right team to scale</h1>
            <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long 
              term not the case with freelancers</p>
            <p>Our <span> delivery model </span>helps
               you cut costs and deliver within budget.</p>

            <div className='quote'>
              <img src="/images/line.png" alt="" />
              <h5>"Simform is quick to identify larger problem with the
                <br /> Software so we decided to 
                expand our scope to build <br /> new modules"</h5>
            </div>

            <div className='ceo-text'>
              <div>
              <img src="/images/ceo.png" alt="" />
              </div>
              <div className='ceo-writing'>
              <h6>Jeewa markram</h6>
          
              <h3>CEO</h3>
              </div>
            </div>
          </div>

          <div className='team-img'>
            <img src="/images/team1.png" alt="" />
          </div>
        </div>

        <div className="team-text">
        <div className='team-img'>
            <img src="/images/team2.png" alt="" />
          </div>
          <div className="team-content">
            <h1>Build the right team to scale</h1>
            <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long 
              term not the case with freelancers</p>
            <p>Our <span> delivery model </span>helps
               you cut costs and deliver within budget.</p>

            <div className='quote'>
              <img src="/images/line.png" alt="" />
              <h5>"Simform is quick to identify larger problem with the
                <br /> Software so we decided to 
                expand our scope to build <br /> new modules"</h5>
            </div>

            <div className='ceo-text'>
              <div>
              <img src="/images/ceo.png" alt="" />
              </div>
              <div className='ceo-writing'>
              <h6>Jeewa markram</h6>
          
              <h3>CEO</h3>
              </div>
            </div>
          </div>

        
        </div>


        <div className="team-text">
          <div className="team-content">
            <h1>Build the right team to scale</h1>
            <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long 
              term not the case with freelancers</p>
            <p>Our <span> delivery model </span>helps
               you cut costs and deliver within budget.</p>

            <div className='quote'>
              <img src="/images/line.png" alt="" />
              <h5>"Simform is quick to identify larger problem with the
                <br /> Software so we decided to 
                expand our scope to build <br /> new modules"</h5>
            </div>

            <div className='ceo-text'>
              <div>
              <img src="/images/ceo.png" alt="" />
              </div>
              <div className='ceo-writing'>
              <h6>Jeewa markram</h6>
          
              <h3>CEO</h3>
              </div>
            </div>
          </div>

          <div className='team-img'>
            <img src="/images/team3.png" alt="" />
          </div>
        </div>
      </section>

      <Development development={development} />
       <section className='tech-stack'>
       <div className='line-header'>
          <div>
        <img src="/Deco-line.png" alt="" />
        </div>
          <h1>Our</h1>
          <h1 className='second-header'>Tech Stack</h1>
        </div>

        <div className='tech-text'>
          <div className='tech-first'>
          <h5>Backend</h5>
          <img src="/images/tech-line.png" alt="" />
          </div>
          <div className='tech1'>
          <h5>Frontend</h5>
          <h5>Databases</h5>
          </div>
           <div className='tech2'>
          <h5>CMS</h5>
          <h5>CloudTesting</h5>
          <h5>DevOps</h5>
          </div>
        </div>

        <div className='tech-img'>
          <img src="/images/stack.png" alt="" />
        </div>
       </section>

       <section className='how-works'>
       <div className='line-header'>
          <div>
        <img src="/Deco-line.png" alt="" />
        </div>
          <h1>How development</h1>
          <h1 className='second-header'>through Diggy Solutions works</h1>
        </div>

        <div className='how-works-content'>
          <div className='how-text'>
            <h1> <span>#1</span> Assemble the right team</h1>
            <p>We handle all aspects of vetting and choosing the right team that you don't
               have the time, expertise, or desire to do.</p>
          </div>

          <div className='how-text'>
            <h1> <span>#2</span> Tech architecture</h1>
            <p>We handle all aspects of vetting and choosing the right team that you don't
               have the time, expertise, or desire to do.</p>
          </div>

          <div className='how-text'>
            <h1> <span>#3</span> Assemble the right team</h1>
            <p>We handle all aspects of vetting and choosing the right team that you don't
               have the time, expertise, or desire to do.</p>
          </div>

      
        </div>
        <div className='how-img'>
            <img src="/images/how-works.png" alt="" />
          </div>

          <div className='how-works-content2'>
          <div className='how-text'>
            <h1> <span>#4</span> Assemble the right team</h1>
            <p>We handle all aspects of vetting and choosing the right team that you don't
               have the time, expertise, or desire to do.</p>
          </div>

          <div className='how-text'>
            <h1> <span>#5</span> Assemble the right team</h1>
            <p>We handle all aspects of vetting and choosing the right team that you don't
               have the time, expertise, or desire to do.</p>
          </div>

          <div className='how-text'>
            <h1> <span>#6</span> Assemble the right team</h1>
            <p>We handle all aspects of vetting and choosing the right team that you don't
               have the time, expertise, or desire to do.</p>
          </div>

      
        </div>
       </section>

       <section className='features'>
       <div className='line-header'>
          <div>
        <img src="/Deco-line.png" alt="" />
        </div>
          <h1>Featured</h1>
          <h1 className='second-header'>Resources</h1>
        </div>

      <div className='slider-image'>
        <div className="img-readmore">
          <img  className='slide-image' src="/images/feature1.png" alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src="/images/arrow.png" alt="" />
          </div>
        </div>
      
        <div className="img-readmore">
        <img className='slide-image' src="/images/feature2.png" alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src="/images/arrow.png" alt="" />
          </div>
        </div>

        <div className="img-readmore">
        <img className='slide-image' src="/images/feature3.png" alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src="/images/arrow.png" alt="" />
          </div>
        </div>

        <div className="img-readmore">
        <img className='slide-image' src="/images/feature4.png" alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src="/images/arrow.png" alt="" />
          </div>
        </div>

        <div  className="img-readmore">
        <img  className='slide-image'src="/images/feature5.png" alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src="/images/arrow.png" alt="" />
          </div>
        </div>
      </div>
     
     
       </section>

       <section className='hire'>
        <div className='hire-content'>
          <h1>Hire the best developers and <br />
          designers around!</h1>
           <div className='img-button'>
            <div>
          <img src="/images/hire1.png" alt="" />
          </div>
          <button>Hire Top Developers</button>
          <div>
          <img src="/images/hire2.png" alt="" />
          </div>
          </div>
        </div>
       </section>

     <Footer />


    </>
  )
}

export default Home

