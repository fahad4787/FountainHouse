import React, { useEffect, useRef, useState } from 'react'
import classes from "./index.module.scss"
import Slider from 'react-slick';
import img1 from "../../Images/banner1.jpg"
import img2 from "../../Images/banner2.jpg"
import img3 from "../../Images/banner3.jpg"
import img4 from "../../Images/banner4.jpg"
import img5 from "../../Images/banner5.jpg"
import { Container } from 'react-bootstrap';

const data = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
]

const Banner = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && counter < 299999) {
      const timer = setInterval(() => {
        setCounter(prevCounter => prevCounter + 50000);
      }, 100);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isVisible, counter]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };
  return (
    <div  ref={sectionRef} className={`${isVisible ? 'visible' : ''} ${classes.banner}`}>
      <Slider {...settings}>
        {
          data.map((data, ind) => {
            return (
              <div className={classes.BannerBox}>
                <div className={`imgBox`}>
                  <img src={data.image} alt="img" />
                </div>
              </div>
            )
          })
        }
      </Slider>

      <div className={classes.counterBox}>
        <Container>
          <ul>
            <li>
              <h3>TOTAL MEMBERS SINCE 1971</h3>
              <p align="center" className={classes.counter}>{counter}</p>
            </li>
            <li>
              <h3>TOTAL MEMBERS SINCE 1971</h3>
              <p align="center" className={classes.counter}>{counter}</p>
            </li>
            <li>
              <h3>TOTAL MEMBERS SINCE 1971</h3>
              <p align="center" className={classes.counter}>{counter}</p>
            </li>
            <li>
              <h3>TOTAL MEMBERS SINCE 1971</h3>
              <p align="center" className={classes.counter}>{counter}</p>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  )
}

export default Banner