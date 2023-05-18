import Title from 'Components/TItle'
import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import classes from "./index.module.scss"
import img1 from "../../Images/avatar1.jpg"
import img2 from "../../Images/avatar2.jpg"
import img3 from "../../Images/avatar3.jpg"
import img4 from "../../Images/avatar4.jpg"
import img5 from "../../Images/avatar5.jpg"
import img6 from "../../Images/avatar6.jpg"
import img7 from "../../Images/avatar7.jpg"
import img8 from "../../Images/avatar8.jpg"
import img9 from "../../Images/avatar9.jpg"
import img10 from "../../Images/avatar10.jpg"

const data = [
  {
    avatar: img1,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
  {
    avatar: img2,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
  {
    avatar: img3,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
  {
    avatar: img4,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
  {
    avatar: img5,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
  {
    avatar: img6,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
  {
    avatar: img7,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
  {
    avatar: img8,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
  {
    avatar: img9,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
  {
    avatar: img10,
    bio: "Dr Arif Alvi, President of Pakistan",
    des: "It was a pleasure to visit 'Fountain House' and to meet the lovely people who live here. Credit to those among us who have established these institutions for the well being of special people those who face depression and mentally disturbed. Transgender people are also working and living here. What a pleasure.",

  },
]

const Testimonials
  = () => {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      autoplay:true,
    };
    return (
      <section className='pt-0'>
        <Container>
          <Title custClass="mb-0" title={"Testimonials"} description="Fountain House Mental Health Care" />
          <Slider {...settings}>
            {
              data.map((data, ind) => {
                return (
                  <div className={classes.slideBox}>
                    <div className={`${classes.avatar} imgBox`}>
                      <img src={data.avatar} alt="avatar" />
                    </div>
                    <h5>{data.bio}</h5>
                    <p>{data.des}</p>
                  </div>
                )
              })
            }
          </Slider>
        </Container>
      </section>
    )
  }

export default Testimonials
