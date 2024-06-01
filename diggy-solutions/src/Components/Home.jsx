import React from 'react'
import  { useEffect, useState} from 'react';
import Slider from "react-slick";
import Navbar from './Navbar';
import "../css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel"
import { testcard } from "./Data";
import { development } from "./Data";
import Development from './Development';
import Footer from "./Footer";
import Logos from './Logos';
import hero from "../images/hero.png"
import image1 from "../images/image1.png"
import ball from "../images/ball.png"
import decoline from "../images/Deco-line.png"
import arrow from "../images/arrow.png"
import Aboutus from "../images/About-us-Video.png"
import Project1 from "../images/project1.png"
import Project2 from "../images/project2.png"
import Project3 from "../images/project3.png"
import Readmore from "../images/read-more.png"
import seemore from "../images/see-more.png"
import line from "../images/line.png"
import ceo from "../images/ceo.png"
import team1 from "../images/team1.png"
import team2 from "../images/team2.png"
import team3 from "../images/team3.png"
import techline from "../images/tech-line.png"
import stack from "../images/stack.png"
import howworks from "../images/how-works.png"
import feature1 from "../images/feature1.png"
import feature2 from "../images/feature2.png"
import feature3 from "../images/feature3.png"
import feature4 from "../images/feature4.png"
import feature5 from "../images/feature5.png"
import hire1 from "../images/hire1.png"
import hire2 from "../images/hire2.png"
import Ellipse from "../images/Ellipse.png"

const HeroText = () => {
  const txts = ["Product", "Results", "Service", "Success"];
  const txtsLen = txts.length;
  const [index, setIndex] = useState(0);
  const textInTimer = 3000;
  const textOutTimer = 2800;

  useEffect(() => {
    const animateText = () => {
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % txtsLen);
      }, textInTimer);
    };
    animateText();
  }, [index, txtsLen]);

  useEffect(() => {
    const outTimer = setTimeout(() => {
      document.querySelector('.animate-text span.text-in')?.classList.add('text-out');
    }, textOutTimer);

    return () => {
      clearTimeout(outTimer);
    };
  }, [index]);

  return (
    <div className="animate-text">
     
          <h1>Great <span  className="text-in">{txts[index]}</span> is </h1>
          

    </div>
  );
};

const Home = () => {
  useEffect(() => {
    const logosSlide = document.querySelector(".img-readmore");
    const copy = logosSlide.cloneNode(true);
    document.querySelector(".slider-image").appendChild(copy);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <Navbar/>
      <section className='hero-section'>
      <div className='hero-text'>
        <div>
      <HeroText />
      <h2>built by great <span>teams</span></h2>
      </div>
        <p>
        We help build and manage a team of world-class 
         developers <br />to bring your vision to life
        </p>

        <a href="">Let's get started</a>
       </div>
      <img src={hero} alt="" />
      </section>
      <div className='ball'>
      <img src={ball} alt="" />
      </div>


      <section className='services'>
       <h2 className='services-header'>Services we offer</h2>
       <div className="components slider-container">
       <Slider {...settings}>
       <div className='text-card'>
        <img src={image1} alt="" />
        <h1>Web Design & Development</h1>
        <p>A Website is an extension of yourself and we 
          can help you to express it properly.
           Your website is your number one marketing asset
            because we live in a digital age.</p>
       </div>
      
       <div className='text-card'>
        <img src={image1}  alt="" />
        <h1>Software Testing Service</h1>
        <p>A Website is an extension of yourself and we 
          can help you to express it properly.
           Your website is your number one marketing asset
            because we live in a digital age.</p>
       </div>

       <div className='text-card'>
        <img src={image1}  alt="" />
        <h1>Mobile App Development</h1>
        <p>A Website is an extension of yourself and we 
          can help you to express it properly.
           Your website is your number one marketing asset
            because we live in a digital age.</p>
       </div>

       <div className='text-card'>
        <img src={image1}  alt="" />
        <h1>Business Consultancy</h1>
        <p>A Website is an extension of yourself and we 
          can help you to express it properly.
           Your website is your number one marketing asset
            because we live in a digital age.</p>
       </div>

       <div className='text-card'>
        <img src={image1}  alt="" />
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
      <img src={ball}  alt="" />
      </div>
      <div className='text-vid'>
      <div className="trust-us">
        
        <div className='line-header'>
          <div>
        <img src={decoline}  alt="" />
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
           <img src={arrow} alt="" />
           </div>

         
      </div>
       <div className='trust'>
      <img  className="responsive"  src={Aboutus} alt="" />
      </div>
      </div>
      </section>

      <section className='meet-the-people'>
      <div className='line-header'>
          <div>
        <img src={decoline}  alt="" />
        </div>
          <h1>Meet the People
            <br />
             <span>We are Working With</span></h1>
        </div>
        <div className='ball3'>
      <img src={ball} alt="" />
      </div>

      <p className='arrows'>
      
      </p>

      <Logos />
      </section>
    

      <Carousel testimony={testcard} />

      <section className='projects'>
        <div className='small-ball'>
        <img src={Ellipse} alt="" />
        </div>
      <div className='line-header'>
          <div>
        <img src={decoline} alt="" />
        </div>
          <h1>Our recent</h1>
          <h1 className='second-header'>Projects</h1>
        </div>

        <div className='projects-text'>
          <div className='project-card'>
          <div className='card-img'>
            <img src={Project1} alt="" />
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
            <img src={Readmore} alt="" />
            </div>
            </div>
          </div>

          <div className='project-card2'>
            <div className='card-img'>
            <img src={Project2} alt="" />
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
            <img src={Readmore} alt="" />
            </div>
            </div>
          </div>
          <div className='project-card3'>
          <div className='card-img'>
            <img src={Project3} alt="" />
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
            <img src={Readmore} alt="" />
            </div>
            </div>
          </div>
          <div className='see-more'>
         <a href="">See more Projects</a>
         <img className='see-more-img' src={seemore} alt="" />
         </div>
        </div>
      </section>

      <section className='team'>
      <div className='line-header'>
          <div>
        <img src={decoline} alt="" />
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
              <img src={line} alt="" />
              <h5>"Simform is quick to identify larger problem with the
                <br /> Software so we decided to 
                expand our scope to build <br /> new modules"</h5>
            </div>

            <div className='ceo-text'>
              <div>
              <img src={ceo} alt="" />
              </div>
              <div className='ceo-writing'>
              <h6>Jeewa markram</h6>
          
              <h3>CEO</h3>
              </div>
            </div>
          </div>

          <div className='team-img'>
            <img src={team1} alt="" />
          </div>
        </div>

        <div className="team-text">
        <div className='team-img'>
            <img src={team2} alt="" />
          </div>
          <div className="team-content">
            <h1>Build the right team to scale</h1>
            <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long 
              term not the case with freelancers</p>
            <p>Our <span> delivery model </span>helps
               you cut costs and deliver within budget.</p>

            <div className='quote'>
              <img src={line}alt="" />
              <h5>"Simform is quick to identify larger problem with the
                <br /> Software so we decided to 
                expand our scope to build <br /> new modules"</h5>
            </div>

            <div className='ceo-text'>
              <div>
              <img src={ceo}alt="" />
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
              <img src={line} alt="" />
              <h5>"Simform is quick to identify larger problem with the
                <br /> Software so we decided to 
                expand our scope to build <br /> new modules"</h5>
            </div>

            <div className='ceo-text'>
              <div>
              <img src={ceo} alt="" />
              </div>
              <div className='ceo-writing'>
              <h6>Jeewa markram</h6>
          
              <h3>CEO</h3>
              </div>
            </div>
          </div>

          <div className='team-img'>
            <img src={team3} alt="" />
          </div>
        </div>
      </section>

      <Development development={development} />
       <section className='tech-stack'>
       <div className='line-header'>
          <div>
        <img src={decoline} alt="" />
        </div>
          <h1>Our</h1>
          <h1 className='second-header'>Tech Stack</h1>
        </div>

        <div className='tech-text'>
          <div className='tech-first'>
          <h5>Backend</h5>
          <img src={techline} alt="" />
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
          <img src={stack} alt="" />
        </div>
       </section>

       <section className='how-works'>
       <div className='line-header'>
          <div>
        <img src={decoline} alt="" />
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
            <img src={howworks} alt="" />
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
        <img src={decoline} alt="" />
        </div>
          <h1>Featured</h1>
          <h1 className='second-header'>Resources</h1>
        </div>

      <div className='slider-image'>
        <div className="img-readmore">
          <img  className='slide-image' src={feature1} alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src={arrow} alt="" />
          </div>
        </div>
      
        <div className="img-readmore">
        <img className='slide-image' src={feature2} alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src={arrow} alt="" />
          </div>
        </div>

        <div className="img-readmore">
        <img className='slide-image' src={feature3} alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src={arrow} alt="" />
          </div>
        </div>

        <div className="img-readmore">
        <img className='slide-image' src={feature4} alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src={arrow} alt="" />
          </div>
        </div>

        <div  className="img-readmore">
        <img  className='slide-image'src={feature5} alt="" />
          <p>How to build a scalable business</p>
          <div className='feature-button'>
          <button>Read More
          </button>
          <img src={arrow} alt="" />
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
          <img src={hire1} alt="" />
          </div>
          <button>Hire Top Developers</button>
          <div>
          <img src={hire2} alt="" />
          </div>
          </div>
        </div>
       </section>

     <Footer />


    </>
  )
}

export default Home

